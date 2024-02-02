import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import 'dotenv/config'
import * as process from 'process'

async function bootstrap() {
  const httpsOptions = {
    key: process.env.HTTPS_PRIVATE_KEY_PATH,
    cert: process.env.HTTPS_PUBLIC_CERTIFICATE_PATH,
  }
  const isHttps = process.env.HTTPS
  const app = await NestFactory.create(
    AppModule,
    isHttps ? { httpsOptions } : {},
  )
  await app.listen(3000)
}
bootstrap()
