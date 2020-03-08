import { prop, Ref, modelOptions, arrayProp } from '@typegoose/typegoose'
import { ApiProperty } from '@nestjs/swagger' 
import { Role } from './role.model';

@modelOptions({
  schemaOptions: {
    timestamps: true
  }  
})

export class User {

  @ApiProperty({ description: '用户名' })
  @prop()
  username: string;

  @ApiProperty({ description: '密码' })
  @prop()
  password: string;

  @ApiProperty({ description: '手机号' })
  @prop()
  mobile: string;

  @ApiProperty({ description: '邮箱' })
  @prop()
  email?: string;

  @ApiProperty({ description: '用户状态：1启用， 0禁用' })
  @prop({ default: 1 })
  status?: Number;

  @ApiProperty({ description: '用户角色' })
  @prop({ ref: Role })
  role: Ref<Role>
}  