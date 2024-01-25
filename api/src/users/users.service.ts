import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>
    ) {}

    async findOne(email: string): Promise<User | undefined> {
        return this.userRepository.findOneBy({email})
    }
    
    async remove(id: number): Promise<void> {
        await this.userRepository.delete(id)
    }

    async create(email: string, password: string, age: number, gender: string, firstName: string, lastName: string){
        const b64Encode = (str: string):string => Buffer.from(str, 'binary').toString('base64')
        return this.userRepository.save({
            email: email,
            password: b64Encode(password),
            points: 0,
            age: age,
            gender: gender,
            firstName: firstName,
            lastName: lastName
        })
    }
}
