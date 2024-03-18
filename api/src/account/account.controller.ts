import {
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
  async getBalance(@Request() req, @Response() res) {
    const user = req.user

    return res.send({
      balance: (await this.accountService.findOne(user.sub)).points,
    })
  }

  @Post('/reset-password')
  async resetPassword(@Request() req) {
    const user = req.user
    const newPassword = req.body['new_password']

    return await this.accountService.resetPassword(user.sub, newPassword)
  }

  @Post('/delete')
  async deleteAccount(@Request() req) {
    const user = req.user

    if (!req.body.confirm) {
      return {
        error:
          "You must confirm the deletion of your account by setting the 'confirm' field to true in your request body.",
      }
    }
    //TODO: refresh token system
    return await this.accountService.deleteAccount(user.sub)
  }

  @Post('/set-card-id')
  async setCardId(@Request() req) {
    const user = req.user
    const cardId = req.cardId
    return await this.accountService.setCardId(user.sub, cardId)
  }
}
