import {Body, Controller, Get, HttpCode, HttpStatus, Post, Request, UseGuards} from '@nestjs/common';
import {AuthService} from './auth.service';
import { AuthGuard } from './auth.guard'
import { Public } from './public/public.decorator'

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {
    }

    @Public()
    @HttpCode(HttpStatus.OK)
    @Post('login')
    signIn(@Body() signInDto: Record<string, any>) {
        return this.authService.signIn(signInDto.email, signInDto.password)
    }

    @Public()
    @HttpCode(HttpStatus.CREATED)
    @Post('register')
    signUp(@Body() signUpDto: Record<string, any>) {
        return this.authService.signUp(signUpDto.email, signUpDto.password, signUpDto.age, signUpDto.gender, signUpDto.firstName, signUpDto.lastName)
    }

    @Get('profile')
    getProfile(@Request() req){
        return req.user
    }

}
