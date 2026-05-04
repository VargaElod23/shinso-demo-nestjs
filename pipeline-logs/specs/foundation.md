# Module Spec: foundation
Round: 2 | Similarity: 78%
Generated: 2026-05-04T18:00:19.377Z

## Function Mapping

### 🟡 CategoryService.getByType → CategoryService.getByType (75%)
**Missing:**
- Automatic tenant scoping via HasTenantScope trait
**Extra (not in source):**
- Manual tenant_id parameter and filtering
- Explicit async/await

### 🟡 CategoryService.getAll → CategoryService.getAll (75%)
**Missing:**
- Automatic tenant scoping via HasTenantScope trait
**Extra (not in source):**
- Manual tenant_id parameter and filtering
- Explicit async/await

### ✅ Category.scopeOfType → CategoryService.scopeOfType (85%)
**Extra (not in source):**
- Private method instead of public scope
- Different parameter signature

### ✅ Category.scopeActive → CategoryService.scopeActive (90%)
**Extra (not in source):**
- Private method instead of public scope

## Unmapped Source Functions
- ❌ Category.listings
- ❌ Category.events
- ❌ Category.posts
- ❌ Category.parent
- ❌ Category.children

## Extra Target Functions (not in source)
- Category entity field definitions
- Category.createQueryBuilder
- Category.getRepository
