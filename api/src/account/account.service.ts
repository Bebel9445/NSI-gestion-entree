import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service'
import * as argon2 from 'argon2'
import { DeleteResult, UpdateResult } from 'typeorm'

@Injectable()
export class AccountService {
    constructor(private usersService: UsersService) { }
    
    async findOne(identifier: string | number) {
        return this.usersService.findOne(identifier)
    }

    async resetPassword(id: number | string, newPassword: string): Promise<UpdateResult> {
        newPassword = await argon2.hash(newPassword)

        if (typeof id === 'string') {
            id = (await this.usersService.findOne(id)).id
        }

        return await this.usersService.resetPassword(id, newPassword)
    }

    async deleteAccount(id: number | string): Promise<DeleteResult> {
        if (typeof id === 'string') {
            id = (await this.usersService.findOne(id)).id
        }

        return await this.usersService.remove(id)
    }
}
