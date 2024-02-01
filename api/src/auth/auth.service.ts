import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as argon2 from 'argon2';
import { JwtService } from '@nestjs/jwt';
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
        return {
            access_token: await this.jwtService.signAsync(payload)
        }
    }

    async signUp(signUpDto: SignUpDto) {
        const {email, password, age, gender, firstName, lastName} = signUpDto
        const hashedPassword = await argon2.hash(password)
        return this.usersService.create(email, hashedPassword, age, gender, firstName, lastName)
    }
}
