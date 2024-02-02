import { Module } from '@nestjs/common';
import { AccountController } from './account.controller'
import { UsersModule } from 'src/users/users.module'
import { AccountGuard } from './account.guard'
import { APP_GUARD } from '@nestjs/core/constants'

@Module({
    controllers:[AccountController],
    imports: [UsersModule],
    providers: [
        {
            provide: APP_GUARD,
            useClass: AccountGuard
        }
    ]
})
export class AccountModule {}
