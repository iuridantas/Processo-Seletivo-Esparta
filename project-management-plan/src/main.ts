import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
  .setTitle('Project Management Plan')
  .setVersion('1.0')
  .addBearerAuth()
  .build();
  
  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api/docs', app, document);

  await app.listen(3000);
}
bootstrap();
