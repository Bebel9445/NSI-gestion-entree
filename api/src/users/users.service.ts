import { BadRequestException, Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
        private dataSource: DataSource
    ) {}

    async findOne(identifier: string | number): Promise<User | undefined> {
        if (typeof identifier === 'string') {
            return this.userRepository.findOneBy({ email: identifier });
        } else {
            return this.userRepository.findOneBy({ id: identifier });
        }
    }
    
    async remove(id: number): Promise<void> {
        await this.userRepository.delete(id)
    }

    async create(email: string, password: string, age: number, gender: string, firstName: string, lastName: string){
        const b64Encode = (str: string):string => Buffer.from(str, 'binary').toString('base64')
        await this.dataSource.transaction(async manager => {
            return await manager.save({
                email: email,
                password: b64Encode(password),
                points: 0,
                age: age,
                gender: gender,
                firstName: firstName,
                lastName: lastName
            })
        }).catch((err) => {
            throw new BadRequestException(err)
        })
    }
}
