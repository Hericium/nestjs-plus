import { prop, modelOptions } from '@typegoose/typegoose'
import { ApiProperty } from '@nestjs/swagger' 
import { Schema } from 'mongoose';

@modelOptions({
  schemaOptions: {
    timestamps: true
  }  
})

export class Access{
  @ApiProperty({description: '模块名称'})
  @prop()
  module_name: string;

  @ApiProperty({description: '操作名称'})
  @prop()
  action_name?: string;

  @ApiProperty({description: '节点类型：1模块， 2路由  3操作' })
  @prop()
  type?: Number;

  @ApiProperty({description: '路由跳转地址'})
  @prop()
  url: string;

  @ApiProperty({description: '和_id自关联, 0表示模块'})  
  @prop()
  module_id: Schema.Types.Mixed;

  @ApiProperty({description: '是否启用：1启用， 0禁用'})
  @prop({default: 1})
  status?: Number;

  @ApiProperty({description: '排序'})
  @prop({default: 1})
  sort?: Number;

  @ApiProperty({description: '描述'})
  @prop()
  description?: string; 

} 