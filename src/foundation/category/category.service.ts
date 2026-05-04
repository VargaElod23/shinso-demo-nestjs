import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './category.entity';

/**
 * CategoryService — NestJS service for category operations.
 * 
 * All queries are tenant-scoped automatically via query filters.
 */
@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}

  /**
   * Get categories filtered by type (listing, event, blog, resource, etc.).
   */
  async getByType(type: string, tenantId: number): Promise<Category[]> {
    const queryBuilder = this.categoryRepository
      .createQueryBuilder('category')
      .where('category.tenant_id = :tenantId', { tenantId })
      .andWhere('category.type = :type', { type })
      .orderBy('category.sort_order', 'ASC')
      .addOrderBy('category.name', 'ASC');

    return await queryBuilder.getMany();
  }

  /**
   * Get all active categories regardless of type.
   */
  async getAll(tenantId: number): Promise<Category[]> {
    const queryBuilder = this.categoryRepository
      .createQueryBuilder('category')
      .where('category.tenant_id = :tenantId', { tenantId })
      .orderBy('category.type', 'ASC')
      .addOrderBy('category.sort_order', 'ASC')
      .addOrderBy('category.name', 'ASC');

    return await queryBuilder.getMany();
  }

  /**
   * Scope helper - filter by type
   */
  private scopeOfType(queryBuilder: any, type: string) {
    return queryBuilder.andWhere('category.type = :type', { type });
  }

  /**
   * Scope helper - active categories (all categories are active in this table)
   */
  private scopeActive(queryBuilder: any) {
    // No filtering needed as categories table has no status column
    return queryBuilder;
  }
}