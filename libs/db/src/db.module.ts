import { Module, Global } from '@nestjs/common';
import { DbService } from './db.service';
import { TypegooseModule } from 'nestjs-typegoose'
import { User } from './models/user.model';
import { Role } from './models/role.model';
import { Access } from './models/access.model';
import { RoleAccess } from './models/role-access.model';

const models = TypegooseModule.forFeature([User, Role, Access, RoleAccess])

@Global()
@Module({
  imports: [
    // 用异步的方式连接数据库,用同步有可能process.env.DB还没加载好
    TypegooseModule.forRootAsync({
      useFactory(){
        return {
          uri: process.env.DB,
          useUnifiedTopology: true,
          useNewUrlParser: true,
          useCreateIndex: true,
          useFindAndModify: false,
        }
      }
    }),
    models,
  ],
  providers: [DbService],
  exports: [DbService, models],
})
export class DbModule {}
