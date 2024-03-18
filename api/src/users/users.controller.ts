import { Body, Controller, Get, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service'
import { AuthGuard } from 'src/auth/auth.guard'

@UseGuards(AuthGuard)
@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) {}

    @Get('find')
    async getUserByCardId(@Body() cardId: string){
        return (await this.userService.findByCardId(cardId)).id
    }
}
