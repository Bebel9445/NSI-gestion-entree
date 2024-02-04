import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  Response,
  UseGuards,
} from '@nestjs/common'
import { AccountGuard } from './account.guard'
import { AccountService } from './account.service'

@Controller('account')
@UseGuards(AccountGuard)
export class AccountController {
  constructor(private accountService: AccountService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  async getAccount(@Request() req, @Response() res) {
    const user = req.user

    return res.send(await this.accountService.findOne(user.sub))
  }

  @Get('/balance')
  async getBalance(@Request() req, @Response() res){
    const user = req.user

    return res.send({"balance": (await this.accountService.findOne(user.sub)).points})
  }

  @Post('/reset-password')
  @HttpCode(HttpStatus.OK)
  async resetPassword(@Request() req){
    const user = req.user
    const newPassword = req.body['new_password']
    
    return await this.accountService.resetPassword(user.sub, newPassword)
  }
}
