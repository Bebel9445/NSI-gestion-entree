import { Body, Controller, Get, HttpStatus, Response, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service'
import { AuthGuard } from 'src/auth/auth.guard'

@UseGuards(AuthGuard)
@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) {}

    @Get('find')
    async getUserByCardId(@Body() cardId: string, @Response() res){
        const user = await this.userService.findByCardId(cardId)
        if (user === null){
            return res.sendStatus(HttpStatus.NOT_FOUND).send()
        }
        return res.status(HttpStatus.OK).send(user.id)
    }
}
