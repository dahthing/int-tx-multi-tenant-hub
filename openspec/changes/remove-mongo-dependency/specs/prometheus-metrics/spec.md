## MODIFIED Requirements

### Requirement: Metrics endpoint is always-on and public

Every NestJS app that imports `SharedModule` SHALL expose a `GET /metrics` endpoint returning Prometheus text format. The endpoint SHALL be decorated with `@Public()` to bypass `AuthGuard` and SHALL use `VERSION_NEUTRAL` so it is not affected by API versioning. No per-app opt-in is required.

#### Scenario: Metrics endpoint returns valid Prometheus text

- **WHEN** a GET request is made to `/<globalPrefix>/metrics`
- **THEN** the response status is 200 with `Content-Type: text/plain; version=0.0.4; charset=utf-8`

#### Scenario: Metrics endpoint is not logged

- **WHEN** a GET request is made to `/metrics`
- **THEN** no automatic HTTP request log line is written for it (the path is in `SILENT_PATHS`)
