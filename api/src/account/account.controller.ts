import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  Response,
} from '@nestjs/common'
import { UsersService } from 'src/users/users.service'

@Controller('account')
export class AccountController {
  constructor(private usersService: UsersService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  async getAccount(@Request() req, @Response() res) {
    const user = req.user

    return res.send(await this.usersService.findOne(user.sub))
  }

  @Get('/balance')
  async getBalance(@Request() req, @Response() res){
    const user = req.user

    return res.send({"balance": (await this.usersService.findOne(user.sub)).points})
  }

  @Post('/reset-password')
  @HttpCode(HttpStatus.OK)
  async resetPassword(@Request() req){
    const user = req.user
    const newPassword = req.body['new_password']
    return newPassword
  }
}
