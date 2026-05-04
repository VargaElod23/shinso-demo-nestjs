import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Notification } from './notification.entity';

@Injectable()
export class NotificationService {
  constructor(
    @InjectRepository(Notification)
    private readonly notificationRepository: Repository<Notification>,
  ) {}

  async getUnreadForUser(userId: number): Promise<Notification[]> {
    return await this.notificationRepository
      .createQueryBuilder('notification')
      .where('notification.user_id = :userId', { userId })
      .andWhere('notification.read_at IS NULL')
      .orderBy('notification.created_at', 'DESC')
      .getMany();
  }

  async send(userId: number, type: string, title: string, message: string): Promise<Notification> {
    const notification = this.notificationRepository.create({
      user_id: userId,
      type,
      title,
      message,
    });

    return await this.notificationRepository.save(notification);
  }

  async markAllReadForUser(userId: number): Promise<number> {
    const result = await this.notificationRepository
      .createQueryBuilder()
      .update(Notification)
      .set({ read_at: new Date() })
      .where('user_id = :userId', { userId })
      .andWhere('read_at IS NULL')
      .execute();

    return result.affected || 0;
  }
}