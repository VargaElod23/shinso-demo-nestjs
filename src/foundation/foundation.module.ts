import { Module } from '@nestjs/common';
import { BaseModule } from './base/base.module';
import { FoundationAuthModule } from './auth/auth.module';
import { TenantModule } from './tenant/tenant.module';
import { ActivityLogModule } from './activity-log/activity-log.module';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [BaseModule, FoundationAuthModule, TenantModule, ActivityLogModule, CategoryModule],
  exports: [BaseModule, FoundationAuthModule, TenantModule, ActivityLogModule, CategoryModule],
})
export class FoundationModule {}