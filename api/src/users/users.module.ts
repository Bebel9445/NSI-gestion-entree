import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UsersController } from './users.controller';
import { ApikeyModule } from 'src/auth/apikey/apikey.module'

@Module({
  providers: [UsersService],
  imports: [ApikeyModule, TypeOrmModule.forFeature([User])],
  exports: [UsersService],
  controllers: [UsersController]
})
export class UsersModule {}
