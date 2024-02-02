import {Body, Controller, Get, HttpCode, HttpStatus, Post, Request} from '@nestjs/common';
import {AuthService} from './auth.service';
import { Public } from './public/public.decorator'
import { SignInDto } from './dto/sign-in.dto'
import { SignUpDto } from './dto/sign-up.dto'

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Public()
    @HttpCode(HttpStatus.OK)
    @Post('login')
    async signIn(@Body() signInDto: SignInDto) {
        return await this.authService.signIn(signInDto)
    }

    @Public()
    @HttpCode(HttpStatus.CREATED)
    @Post('register')
    async signUp(@Body() signUpDto: SignUpDto) {
        return await this.authService.signUp(signUpDto)
    }

    @Get('profile')
    @HttpCode(HttpStatus.OK)
    getProfile(@Request() req){
        return req.user ?? req.body
    }

}
