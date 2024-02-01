import { Controller, Get, HttpCode, HttpStatus, Request, Response } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Controller('account')
export class AccountController {

    constructor(private usersService: UsersService) {}

    @Get()
    @HttpCode(HttpStatus.OK)
    getAccount(@Request() req, @Response() res){
        const user = req['user'];
        if(!user)
            return res.status(HttpStatus.PRECONDITION_REQUIRED).send()

        return this.usersService.findOne(user.id)
    }
    
}
