import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as argon2 from 'argon2';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
    ) {}

    async signIn(email: string, pass: string): Promise<{access_token: string}> {
        const user = await this.usersService.findOne(email)
        //B64 DECODE PASS + ARGON2 CHECK
        const b64Decode = (str: string):string => Buffer.from(str, 'base64').toString('binary')
        if (!await argon2.verify(b64Decode(user.password), pass)) {
            throw new UnauthorizedException()
        }

        const payload = { sub: user.id, email: user.email }
        return {
            access_token: await this.jwtService.signAsync(payload)
        }
    }

    async signUp(email: string, password: string, age: number, gender: string, firstName: string, lastName: string) {
        const hashedPassword = await argon2.hash(password)
        return this.usersService.create(email, hashedPassword, age, gender, firstName, lastName)
    }
}
