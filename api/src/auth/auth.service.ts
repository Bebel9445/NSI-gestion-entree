import { HttpException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as argon2 from 'argon2';
import { JwtService, TokenExpiredError } from '@nestjs/jwt';
import { SignUpDto } from './dto/sign-up.dto'
import { SignInDto } from './dto/sign-in.dto'

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
    ) {}

    async signIn(signInDto: SignInDto): Promise<{access_token: string}> {
        const {email, password} = signInDto
        const user = await this.usersService.findOne(email)
        //B64 DECODE PASS + ARGON2 CHECK
        const b64Decode = (str: string):string => Buffer.from(str, 'base64').toString('binary')
        if (!await argon2.verify(b64Decode(user.password), password)) {
            throw new UnauthorizedException()
        }

        const payload = { sub: user.id, email: user.email }
        user.refreshToken = await this.jwtService.signAsync(payload, {expiresIn: process.env.JWT_REFRESH_TOKEN_EXPIRATION})

        return {
            access_token: await this.generateAccessToken(user.refreshToken)
        }
    }
    
    async signUp(signUpDto: SignUpDto): Promise<boolean> {
        const {email, password, age, gender, firstName, lastName} = signUpDto
        const hashedPassword = await argon2.hash(password)
        return await this.usersService.create(email, hashedPassword, age, gender, firstName, lastName)
    }

    async generateAccessToken(refreshToken: string): Promise<string> {
        const decoded = this.jwtService.decode(refreshToken)
        if (!decoded) {
            throw new Error("refreshToken not valid")
        }

        const user = await this.usersService.findOne(decoded.email)
        if(!user) {
            throw new NotFoundException('user not found')
        }
            
        const decodedUserRefreshToken = this.jwtService.decode(user.refreshToken)
        if (JSON.stringify(decoded) === JSON.stringify(decodedUserRefreshToken)) {
            throw new UnauthorizedException('Invalid token')
        }
        
        if(!await this.jwtService.verifyAsync(refreshToken)){
            throw new UnauthorizedException('Invalid token')
        }
        return await this.jwtService.signAsync(decodedUserRefreshToken, {expiresIn: process.env.JWT_ACCESS_TOKEN_EXPIRATION})
    }
}
