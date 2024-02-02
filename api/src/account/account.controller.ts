import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
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
    if (!user) return await res.status(HttpStatus.PRECONDITION_REQUIRED).send()

    return res.send(await this.usersService.findOne(user.sub))
  }

  @Get('/balance')
  async getBalance(@Request() req, @Response() res){
    const user = req.user
    if (!user) return await res.status(HttpStatus.PRECONDITION_REQUIRED).send()

    return res.send({"balance": (await this.usersService.findOne(user.sub)).points})
  }
}
