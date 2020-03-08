import { Controller } from '@nestjs/common';

import { Crud } from 'nestjs-mongoose-crud'
import { ApiTags } from '@nestjs/swagger'
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';
import { RoleAccess } from '../../../../libs/db/src/models/role-access.model';

@Crud({
  model: RoleAccess,
})

@ApiTags('角色授权')
@Controller('role-access')

@Controller('role-access')
export class RoleAccessController {
  constructor(@InjectModel(RoleAccess) private readonly model:ReturnModelType<typeof RoleAccess>){}
}
