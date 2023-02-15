require('module-alias/register');

import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { RootModule } from './root.module';

async function bootstrap() {
  const app = await NestFactory.create(RootModule);

  const config = new DocumentBuilder()
    .setTitle('Customers API')
    .setDescription('The customers API')
    .setVersion('1.0')
    .addTag('customers')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('swagger', app, document);

  await app.listen(3000);
}
bootstrap();
