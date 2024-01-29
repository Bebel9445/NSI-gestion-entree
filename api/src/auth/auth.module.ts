import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { UsersModule } from 'src/users/users.module';
import { AuthGuard } from './auth.guard'
import { APP_GUARD } from '@nestjs/core/constants'

@Module({
providers: [
  AuthService,
  {
    provide: APP_GUARD,
    useClass: AuthGuard
  }
],
  controllers: [AuthController],
  imports: [
    UsersModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: {expiresIn: '24h'}
    })
  ],
  exports: [AuthService]
})
export class AuthModule {}
