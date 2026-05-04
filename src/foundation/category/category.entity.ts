import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { IsString, IsOptional, IsNumber } from 'class-validator';

@Entity('categories')
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNumber()
  tenant_id: number;

  @Column()
  @IsString()
  name: string;

  @Column()
  @IsString()
  slug: string;

  @Column({ nullable: true })
  @IsString()
  @IsOptional()
  color?: string;

  @Column()
  @IsString()
  type: string;

  @Column({ nullable: true })
  @IsNumber()
  @IsOptional()
  parent_id?: number;

  @Column({ nullable: true })
  @IsNumber()
  @IsOptional()
  sort_order?: number;

  @CreateDateColumn()
  created_at: Date;

  // Relations
  @ManyToOne(() => Category, category => category.children)
  @JoinColumn({ name: 'parent_id' })
  parent?: Category;

  @OneToMany(() => Category, category => category.parent)
  children: Category[];

  // Dynamic relations - these would be defined in the actual business modules
  @OneToMany('Listing', 'category')
  listings: any[];

  @OneToMany('Event', 'category')
  events: any[];

  @OneToMany('Post', 'category')
  posts: any[];

  // Query builder helpers for scopes
  static createQueryBuilder(alias?: string) {
    return this.getRepository().createQueryBuilder(alias);
  }

  static getRepository() {
    // This would be injected via TypeORM in actual usage
    throw new Error('Repository not available in static context');
  }
}