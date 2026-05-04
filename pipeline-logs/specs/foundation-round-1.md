# Module Spec: foundation
Round: 1 | Similarity: 25%
Generated: 2026-05-04T19:22:11.972Z

## Function Mapping

### ✅ CategoryService.getByType → CategoryService.getByType (85%)
**Missing:**
- automatic tenant scoping via HasTenantScope trait
- active() scope filtering
**Extra (not in source):**
- explicit tenantId parameter requirement

### ✅ CategoryService.getAll → CategoryService.getAll (85%)
**Missing:**
- automatic tenant scoping via HasTenantScope trait
- active() scope filtering
**Extra (not in source):**
- explicit tenantId parameter requirement

### ✅ Category.scopeOfType → CategoryService.scopeOfType (90%)

### ✅ Category.scopeActive → CategoryService.scopeActive (95%)

## Unmapped Source Functions
- ❌ NotificationService.getUnreadForUser
- ❌ NotificationService.send
- ❌ NotificationService.markAllReadForUser
- ❌ TagService.getActive
- ❌ TagService.getByColor
- ❌ TagService.create
- ❌ TagService.attachToCategory
- ❌ Category.listings
- ❌ Category.events
- ❌ Category.posts
- ❌ Category.parent
- ❌ Category.children
- ❌ Notification.user
- ❌ Notification.scopeUnread
- ❌ Notification.scopeOfType
- ❌ Notification.markAsRead
- ❌ Tag.categories
- ❌ Tag.scopeActive
- ❌ Tag.scopeByColor

## Extra Target Functions (not in source)
- Category.createQueryBuilder
- Category.getRepository
