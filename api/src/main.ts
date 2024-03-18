import { NestApplication, NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import 'dotenv/config'
import * as process from 'process'
import { readFileSync } from 'fs'
import helmet from 'helmet'

async function bootstrap() {
  const isHttps: boolean = process.env.HTTPS === 'true'
  const httpsOptions = isHttps
    ? {
        key: readFileSync(process.env.HTTPS_PRIVATE_KEY_PATH, 'utf-8'),
        cert: readFileSync(process.env.HTTPS_PUBLIC_CERTIFICATE_PATH, 'utf-8'),
      }
    : {}

  let app: NestApplication
  if (isHttps) {
    app = await NestFactory.create(AppModule, {
      httpsOptions,
    })
  } else app = await NestFactory.create(AppModule)

  app.use(helmet())
  app.enableCors()
  await app.listen(3000)
}
bootstrap()
