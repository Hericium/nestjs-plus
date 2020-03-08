import { Controller } from '@nestjs/common';
import { Crud } from 'nestjs-mongoose-crud'
import { ApiTags } from '@nestjs/swagger'
import { Role } from '../../../../libs/db/src/models/role.model';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';

@Crud({
  model: Role,
})

@ApiTags('角色')
@Controller('roles')
export class RolesController {
  constructor(@InjectModel(Role) private readonly model: ReturnModelType<typeof Role>){}
}
