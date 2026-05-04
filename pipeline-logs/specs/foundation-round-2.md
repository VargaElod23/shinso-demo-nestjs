# Module Spec: foundation
Round: 2 | Similarity: 87%
Generated: 2026-05-04T19:23:14.889Z

## Function Mapping

### 🟡 CategoryService.getByType → CategoryService.getByType (75%)
**Missing:**
- Automatic tenant scoping via HasTenantScope trait
**Extra (not in source):**
- Manual tenant_id parameter and filtering

### 🟡 CategoryService.getAll → CategoryService.getAll (75%)
**Missing:**
- Automatic tenant scoping via HasTenantScope trait
**Extra (not in source):**
- Manual tenant_id parameter and filtering

### ✅ NotificationService.getUnreadForUser → NotificationService.getUnreadForUser (90%)

### ✅ NotificationService.send → NotificationService.send (85%)
**Missing:**
- Automatic tenant_id assignment

### ✅ NotificationService.markAllReadForUser → NotificationService.markAllReadForUser (90%)

### ✅ TagService.getActive → TagService.getActive (90%)

### ✅ TagService.getByColor → TagService.getByColor (90%)

### ✅ TagService.create → TagService.create (85%)
**Missing:**
- Laravel's str() helper for slug generation
- Automatic tenant_id assignment
**Extra (not in source):**
- Manual slug generation with replace logic

### ✅ TagService.attachToCategory → TagService.attachToCategory (80%)

### ✅ Category.scopeOfType → CategoryService.scopeOfType (95%)

### ✅ Category.scopeActive → CategoryService.scopeActive (95%)

### ✅ Notification.scopeUnread → Notification.scopeUnread (95%)

### ✅ Notification.scopeOfType → Notification.scopeOfType (95%)

### ✅ Notification.markAsRead → Notification.markAsRead (85%)
**Missing:**
- Database persistence via update()

### ✅ Tag.scopeActive → Tag.scopeActive (95%)

### ✅ Tag.scopeByColor → Tag.scopeByColor (95%)
