import { INestApplication } from '@nestjs/common';
import * as bodyParser from 'body-parser';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export const initializeApp = (app: INestApplication) => {
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.setGlobalPrefix('/');

  const options = new DocumentBuilder()
    .setTitle('Api v1')
    .setDescription('He Thong Thi Trac Nghiem - Auth : Nguyen Van Long')
    .setVersion('1.0')
    .addBearerAuth(undefined, 'defaultBearerAuth')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('/docs', app, document);
};
