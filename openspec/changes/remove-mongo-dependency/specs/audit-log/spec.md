## MODIFIED Requirements

### Requirement: Writing an audit event never affects the audited action

Recording SHALL be best-effort. If an event cannot be stored, the audited action SHALL complete with exactly the result it would have had, and the storage failure SHALL be logged and reported to error tracking with the action and correlation ID. An event SHALL be written outside the audited action's own database transaction, so a failed event write never undoes the action. A write that hangs SHALL NOT delay the response by more than five seconds.

#### Scenario: Audit storage unavailable

- **WHEN** an admin bans a user and the database rejects the write of the audit event
- **THEN** the ban succeeds with its normal response and stays applied, and an error naming `admin.user.ban` and the correlation ID is logged and reported

#### Scenario: Audit storage hangs

- **WHEN** a user signs in while the write of the audit event is blocked and never completes
- **THEN** the sign-in response is returned within five seconds with its normal result

### Requirement: Audit events are retained for a configurable period

Each event SHALL be deleted automatically within one day after it becomes older than the configured retention, set in days by `AUDIT_RETENTION_DAYS` (default 365). Changing the setting SHALL apply to events recorded afterwards without failing startup.

#### Scenario: Default retention

- **WHEN** `AUDIT_RETENTION_DAYS` is not set
- **THEN** a new event is scheduled to expire 365 days after it occurred

#### Scenario: Changed retention

- **WHEN** the service restarts with `AUDIT_RETENTION_DAYS=90` after running with 365
- **THEN** startup succeeds, and events recorded afterwards expire 90 days after they occurred

#### Scenario: Expired events are purged

- **WHEN** the daily retention purge runs while some events have passed their expiry and others have not
- **THEN** every expired event is deleted and every unexpired event is still stored

### Requirement: Audit events are immutable

The system SHALL offer no operation to edit or delete individual audit events, and the database SHALL refuse any update of a stored event and any deletion of an event that has not expired. Events leave storage only through retention expiry.

#### Scenario: No mutation endpoint

- **WHEN** an admin sends PATCH, PUT or DELETE to the audit events resource
- **THEN** the request is rejected and no event changes

#### Scenario: Direct update refused by the database

- **WHEN** a client connected with the application's database credentials runs an update on a stored event
- **THEN** the statement fails and the event is unchanged

#### Scenario: Deleting an unexpired event refused by the database

- **WHEN** a client connected with the application's database credentials deletes an event whose expiry is still in the future
- **THEN** the statement fails and the event is still stored

### Requirement: Admins can query audit events

The API SHALL expose audit events read-only at `GET /api/v1/audit-events`, to admins only. Results SHALL be newest first, paginated in the shared paginated shape (`take` 1–100, default 20), and filterable by actor id, actor email, target id, action, outcome and an occurred-at date range. The actor email SHALL also match the attempted email of failed sign-ins, which have no actor, in any letter case. Any combination of filters SHALL be allowed.

#### Scenario: Filter by target

- **WHEN** an admin requests events with `targetId` set to user U
- **THEN** only events targeting U are returned, newest first, with `meta.total` counting all matches

#### Scenario: Filter by actor email

- **WHEN** an admin requests events with `actorEmail` set to a user's email in any letter case
- **THEN** the events of that actor are returned, together with the failed sign-ins that tried that email

#### Scenario: Attempted email typed in another letter case

- **WHEN** a failed sign-in tried `Ana@Example.com` and an admin filters by `actorEmail` `ana@example.com`
- **THEN** that failed sign-in is among the returned events

#### Scenario: Non-admin access

- **WHEN** an authenticated non-admin requests audit events
- **THEN** the response is 403

#### Scenario: Unauthenticated access

- **WHEN** a request without a session requests audit events
- **THEN** the response is 401
