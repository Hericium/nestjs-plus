import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);


  const options = new DocumentBuilder()
    .setTitle('nestjs-plus后台管理API')
    .setDescription('后台管理接API')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('admin-docs', app, document);

  await app.listen(process.env.ADMIN_PORT);
  console.log(`http://localhost:${process.env.ADMIN_PORT}/admin-docs`)
}
bootstrap();
