import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { IsString, IsOptional, IsNumber, IsDateString } from 'class-validator';

@Entity('notifications')
export class Notification {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNumber()
  tenant_id: number;

  @Column()
  @IsNumber()
  user_id: number;

  @Column()
  @IsString()
  type: string;

  @Column()
  @IsString()
  title: string;

  @Column('text')
  @IsString()
  message: string;

  @Column({ nullable: true })
  @IsDateString()
  @IsOptional()
  read_at?: Date;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  // Relations
  @ManyToOne('User', 'notifications')
  @JoinColumn({ name: 'user_id' })
  user: any;

  /**
   * Scope for unread notifications
   */
  static scopeUnread(queryBuilder: any) {
    return queryBuilder.andWhere('notification.read_at IS NULL');
  }

  /**
   * Scope for filtering by notification type
   */
  static scopeOfType(queryBuilder: any, type: string) {
    return queryBuilder.andWhere('notification.type = :type', { type });
  }

  /**
   * Mark this notification as read
   */
  markAsRead(): void {
    this.read_at = new Date();
  }
}