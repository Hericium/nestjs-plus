import { prop, Ref, modelOptions, arrayProp } from '@typegoose/typegoose'
import { ApiProperty } from '@nestjs/swagger' 
import { Role } from './role.model';
import { Access } from './access.model';

@modelOptions({
  schemaOptions: {
    timestamps: true
  }  
})

export class RoleAccess{
  @ApiProperty({ description: '角色' })
  @prop({ ref: Role })
  role: Ref<Role>

  @ApiProperty({ description: '权限' })
  @prop({ ref: Access})
  access: Ref<Access>
}  