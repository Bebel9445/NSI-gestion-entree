import { Module } from '@nestjs/common';
import { AccountController } from './account.controller'
import { UsersModule } from 'src/users/users.module'
import { AccountService } from './account.service';

@Module({
    controllers:[AccountController],
    imports: [UsersModule],
    providers: [AccountService],
    exports: [AccountService]
})
export class AccountModule {}
