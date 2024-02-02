import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { User } from './users/user.entity';
import 'dotenv/config'
import * as process from "process";
import { APP_GUARD } from '@nestjs/core'
import { AuthGuard } from './auth/auth.guard'
import { ApikeyModule } from './auth/apikey/apikey.module'
import { AccountController } from './account/account.controller';
import { AccountModule } from './account/account.module';
import { Apikey } from './auth/apikey/apikey.entity'

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: process.env.DATABASE_HOST,
    port: +process.env.DATABASE_PORT,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_DATABASE,
    entities: [User, Apikey],
    synchronize: true
  }), AuthModule, UsersModule, ApikeyModule, AccountModule],
  controllers: [AuthController, AccountController],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard
    }
  ],
})
export class AppModule {

  
}
