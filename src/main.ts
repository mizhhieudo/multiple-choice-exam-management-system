import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app/app.module';
import { initializeApp } from './shared/initApp/initApp';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  initializeApp(app);
  await app.listen(3000);
  console.log('Started on http://localhost:3000');
  console.log('Started on http://localhost:3000/docs');
}
bootstrap();
