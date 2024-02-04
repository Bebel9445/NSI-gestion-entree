import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service'
import * as argon2 from 'argon2'
import { UpdateResult } from 'typeorm'

@Injectable()
export class AccountService {
    constructor(private usersService: UsersService) { }
    
    async findOne(identifier: string | number) {
        return this.usersService.findOne(identifier)
    }

    async resetPassword(id: number, newPassword: string): Promise<UpdateResult> {
        newPassword = await argon2.hash(newPassword)
        return await this.usersService.resetPassword(id, newPassword)
    }
}
