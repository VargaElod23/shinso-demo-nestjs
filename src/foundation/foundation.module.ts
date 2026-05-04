import { Module } from '@nestjs/common';
import { BaseModule } from './base/base.module';
import { FoundationAuthModule } from './auth/auth.module';
import { TenantModule } from './tenant/tenant.module';
import { ActivityLogModule } from './activity-log/activity-log.module';
import { CategoryModule } from './category/category.module';
import { NotificationModule } from './notification/notification.module';
import { TagModule } from './tag/tag.module';

@Module({
  imports: [
    BaseModule, 
    FoundationAuthModule, 
    TenantModule, 
    ActivityLogModule,
    CategoryModule,
    NotificationModule,
    TagModule,
  ],
  exports: [
    BaseModule, 
    FoundationAuthModule, 
    TenantModule, 
    ActivityLogModule,
    CategoryModule,
    NotificationModule,
    TagModule,
  ],
})
export class FoundationModule {}