import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'dotenv/config'
import * as process from "process";

async function bootstrap() {
  console.log(process.env.DATABASE_HOST)
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
