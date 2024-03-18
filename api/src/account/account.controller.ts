import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Patch,
  Post,
  Request,
  Response,
  UseGuards,
} from '@nestjs/common'
import { AccountGuard } from './account.guard'
import { AccountService } from './account.service'
import { ApiKeyOnly } from 'src/auth/apikey/apikey.decorator'
import { DataSource } from 'typeorm'

@Controller('account')
@UseGuards(AccountGuard)
export class AccountController {
  constructor(
    private accountService: AccountService,
    private dataSource: DataSource,
  ) {}

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

  @ApiKeyOnly()
  @Patch('/balance/recharge')
  async rechargeBalance(@Request() req) {
    const userId = req.user.sub
    const user = await this.accountService.findOne(userId)
    await this.dataSource.transaction(async (manager) => {
      user.points += +req.body.amount
      manager.save(user)
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
