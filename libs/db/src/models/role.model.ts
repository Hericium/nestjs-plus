import { prop, modelOptions, arrayProp, Ref } from '@typegoose/typegoose'
import { ApiProperty } from '@nestjs/swagger' 
import { User } from './user.model';

@modelOptions({
  schemaOptions: {
    timestamps: true
  }  
})

export class Role {

  @ApiProperty({description: '角色名称'})
  @prop()
  title: string;

  @ApiProperty({description: '描述'})
  @prop()
  description?: string;

  @ApiProperty({description: '角色状态：1启用， 0禁用'})
  @prop({default: 1})
  status?: Number;

  @arrayProp({
    ref: 'User',
    localField: '_id',
    foreignField: 'role',
  })
  users: Ref<User>[];
} 