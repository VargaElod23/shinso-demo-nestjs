import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { IsString, IsOptional, IsBoolean } from 'class-validator';
import { Category } from '../category/category.entity';

@Entity('tags')
export class Tag {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  tenant_id: number;

  @Column()
  @IsString()
  name: string;

  @Column()
  @IsString()
  slug: string;

  @Column({ default: '#7073FF' })
  @IsString()
  @IsOptional()
  color: string;

  @Column({ default: true })
  @IsBoolean()
  @IsOptional()
  is_active: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  // Relations
  @ManyToMany(() => Category)
  @JoinTable({ name: 'category_tag' })
  categories: Category[];

  /**
   * Scope for active tags
   */
  static scopeActive(queryBuilder: any) {
    return queryBuilder.andWhere('tag.is_active = :isActive', { isActive: true });
  }

  /**
   * Scope for filtering by color
   */
  static scopeByColor(queryBuilder: any, color: string) {
    return queryBuilder.andWhere('tag.color = :color', { color });
  }
}