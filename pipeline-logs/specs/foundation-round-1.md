# Module Spec: foundation
Round: 1 | Similarity: 75%
Generated: 2026-05-04T18:30:53.731Z

## Function Mapping

### ✅ CategoryService.getByType → CategoryService.getByType (85%)
**Missing:**
- automatic tenant scoping via HasTenantScope trait
**Extra (not in source):**
- explicit tenantId parameter and manual tenant filtering

### ✅ CategoryService.getAll → CategoryService.getAll (85%)
**Missing:**
- automatic tenant scoping via HasTenantScope trait
**Extra (not in source):**
- explicit tenantId parameter and manual tenant filtering

### 🟡 Category.scopeOfType → CategoryService.scopeOfType (75%)

### ✅ Category.scopeActive → CategoryService.scopeActive (90%)

### ❌ Category.listings → Category.listings (20%)
**Missing:**
- actual TypeORM relationship definition

### ❌ Category.events → Category.events (20%)
**Missing:**
- actual TypeORM relationship definition

### ❌ Category.posts → Category.posts (20%)
**Missing:**
- actual TypeORM relationship definition

### ✅ Category.parent → Category.parent (95%)

### ✅ Category.children → Category.children (95%)

## Unmapped Source Functions
- ❌ TagService.getActive
- ❌ TagService.getByColor
- ❌ TagService.create
- ❌ TagService.attachToCategory
- ❌ Tag.categories
- ❌ Tag.scopeActive
- ❌ Tag.scopeByColor

## Extra Target Functions (not in source)
- Category.createQueryBuilder
- Category.getRepository
