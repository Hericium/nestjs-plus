import { Controller } from '@nestjs/common';
import { Crud } from 'nestjs-mongoose-crud'
import { ApiTags } from '@nestjs/swagger'
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';
import { Access } from '../../../../libs/db/src/models/access.model';

@Crud({
  model: Access 
})

@ApiTags('权限')
@Controller('access')

export class AccessController {
  constructor(@InjectModel(Access) private readonly model:ReturnModelType<typeof Access>){}
}
