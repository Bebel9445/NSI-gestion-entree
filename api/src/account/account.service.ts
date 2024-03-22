import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service'
import * as argon2 from 'argon2'
import { DeleteResult, UpdateResult } from 'typeorm'

@Injectable()
export class AccountService {
    constructor(private usersService: UsersService) { }
    
    async findOne(identifier: string) {
        return this.usersService.findOne(identifier)
    }

    async resetPassword(id: string, newPassword: string): Promise<UpdateResult> {
        newPassword = await argon2.hash(newPassword)

        const userId = (await this.usersService.findOne(id)).id
        return await this.usersService.resetPassword(userId, newPassword)
    }

    async deleteAccount(id: string): Promise<DeleteResult> {
        return await this.usersService.remove((await this.usersService.findOne(id)).id)
    }

    async setCardId(id: string, cardId: string): Promise<UpdateResult> {
        const userId = (await this.usersService.findOne(id)).id
        return await this.usersService.setCardId(userId, cardId)
    }
}
