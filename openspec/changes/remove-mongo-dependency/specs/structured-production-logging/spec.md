## MODIFIED Requirements

### Requirement: Probe and scrape requests are kept out of request logs

Requests whose path contains `/health`, `/metrics` or `/favicon.ico` as a whole path segment sequence, regardless of any global prefix before it or query string after it, SHALL NOT produce an automatic HTTP request log line on stdout. Every other request SHALL continue to be logged. This applies to every NestJS app.

#### Scenario: Prefixed liveness probe

- **WHEN** a probe requests `/api/health/live` or `/api/health/ready`
- **THEN** no automatic HTTP log line is written to stdout for it

#### Scenario: Metrics scrape with a query string

- **WHEN** a scraper requests `/api/metrics?x=1`
- **THEN** it is not logged to stdout

#### Scenario: Look-alike path is still logged

- **WHEN** a client requests `/api/healthcheck` or `/api/users/metrics-report`
- **THEN** the request is logged to stdout as usual

#### Scenario: Ordinary request is still logged

- **WHEN** a client requests `/api/users`
- **THEN** the request is logged to stdout as usual

## ADDED Requirements

### Requirement: Request logs go only to the log output

Every NestJS app SHALL log each HTTP request as one line on its log output, with the method, the sanitized URL, the response status, the duration and the correlation ID. No app SHALL store request or response logs in a database, and no request or response body or header SHALL appear in a request log line.

#### Scenario: Ordinary request

- **WHEN** a client sends `POST /api/v1/customers` with a JSON body and receives 201
- **THEN** one log line records the method, the path, status 201, the duration and the request's correlation ID, and the line contains no part of the request or response body

#### Scenario: No database copy

- **WHEN** any request completes
- **THEN** no record of that request is written to any database

### Requirement: Outgoing emails are logged without personal data

Each email send attempt SHALL produce one structured log line with the outcome, the attempt number, the template id or else the subject the caller gave, the number of recipients, the provider's message id when it reports one, and the correlation ID. No email log line SHALL contain an email address, a recipient name, template parameters or body text, and no email record SHALL be stored in a database.

#### Scenario: Email sent

- **WHEN** a password reset email is sent successfully
- **THEN** one log line records outcome `sent`, the subject, one recipient and the correlation ID, and the line contains neither the recipient's address nor the reset link

#### Scenario: Email fails

- **WHEN** the provider rejects an email
- **THEN** a log line records outcome `failed` and the attempt number, with no address or body text

#### Scenario: Development redirect

- **WHEN** an email is redirected to the development inbox, which prefixes the delivered subject with the original recipients
- **THEN** the log line carries the subject as the caller gave it and contains none of the original recipients' addresses, nor the development inbox address

### Requirement: Queue and event logs carry no payload

When a job is added to a queue or an event is published, the log line SHALL name the job name or event pattern and the correlation ID, and SHALL NOT contain the job or event data.

#### Scenario: Password reset job queued

- **WHEN** a password reset email job is added to the email queue
- **THEN** the log line names the job and the correlation ID, and contains neither the recipient's address nor the reset link

#### Scenario: Event published

- **WHEN** a `USER_CREATED` event is published
- **THEN** the log line names the event pattern and the correlation ID, and contains none of the user's data
