## REMOVED Requirements

### Requirement: LoggingInterceptor is unit tested

**Reason**: `LoggingInterceptor` is deleted. Its only job was to copy each request and response into the MongoDB request log, and the automatic `pino-http` line already logs every request (see `structured-production-logging`, "Request logs go only to the log output").

**Migration**: None for callers; the interceptor was registered globally by `SharedModule` and nothing else referenced it. The request-log behavior is covered by the `pino-http` configuration tests.
