import { Module } from '@nestjs/common';
import { CommonService } from './common.service';
import { ConfigModule } from '@nestjs/config'
import { DbModule } from '../../db/src/db.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }), 
    DbModule,
  ],
  providers: [CommonService],
  exports: [CommonService, DbModule],
})
export class CommonModule {}
