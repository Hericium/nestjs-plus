import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { RolesController } from './roles/roles.controller';
import { RolesModule } from './roles/roles.module';
import { CommonModule } from '../../../libs/common/src/common.module';
import { AccessModule } from './access/access.module';
import { RoleAccessModule } from './role-access/role-access.module';

@Module({
  imports: [
    // 公共模块先加载
    CommonModule, 
    UsersModule,
    RolesModule,
    AccessModule,
    RoleAccessModule
  ],
  controllers: [AppController, RolesController],
  providers: [AppService],
})
export class AppModule {}
