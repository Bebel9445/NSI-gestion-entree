import { NestApplication, NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import 'dotenv/config'
import * as process from 'process'
import { readFileSync } from 'fs'

async function bootstrap() {
  const isHttps: boolean = process.env.HTTPS === 'true'
  const httpsOptions = isHttps
    ? {
        key: readFileSync(process.env.HTTPS_PRIVATE_KEY_PATH),
        cert: readFileSync(process.env.HTTPS_PUBLIC_CERTIFICATE_PATH),
      }
    : {}
  
  let app: NestApplication
  if (isHttps) {
    app = await NestFactory.create(AppModule, {
      httpsOptions,
    })
  } else
    app = await NestFactory.create(AppModule)
  
  await app.listen(3000)
}
bootstrap()
