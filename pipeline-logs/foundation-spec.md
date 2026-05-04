# Foundation Spec
Extracted: 2026-05-04T18:30:30.446Z
Total classes: 5 | Foundation: 0 (0%)
Threshold: 15%+ dependents

## Foundation Modules

## Translation Guidance

The foundation MUST be translated first and all modules MUST inherit from it.

### NestJS Foundation Structure
```
src/foundation/
```

### Key Translations
- `BaseApiController` → abstract NestJS controller with `respondWithData()`, `respondWithError()`
- `$this->requireAdmin()` → `@UseGuards(AdminGuard)` decorator
- `$this->getTenantId()` → `@TenantId()` param decorator
- `ActivityLog::log()` → `ActivityLogService.log()` via DI
- `HasTenantScope` trait → `TenantInterceptor` that auto-filters queries
- `rateLimit()` → `@UseGuards(RateLimitGuard)`