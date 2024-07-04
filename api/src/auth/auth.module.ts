import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { UsersModule } from 'src/users/users.module';
import { ApikeyModule } from './apikey/apikey.module';

@Module({
  providers: [AuthService],
  controllers: [AuthController],
  imports: [
    UsersModule,
    ApikeyModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret
    }),
  ],
  exports: [AuthService]
})
export class AuthModule {}
