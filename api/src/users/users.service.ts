import { BadRequestException, Injectable } from '@nestjs/common'
import { User } from './user.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { DataSource, DeleteResult, Repository, UpdateResult } from 'typeorm'

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private dataSource: DataSource,
  ) {}

  b64Encode = (str: string): string =>
    Buffer.from(str, 'binary').toString('base64')

  async findOne(identifier: string | number): Promise<User | undefined> {
    if (typeof identifier === 'string') {
      return this.userRepository.findOneBy({ email: identifier })
    } else {
      return this.userRepository.findOneBy({ id: identifier })
    }
  }

  async remove(id: number): Promise<DeleteResult> {
    return await this.dataSource.transaction(async (manager) => {
      return await manager.delete(User, id)
    })
  }

  async resetPassword(id: number, newPassword: string): Promise<UpdateResult> {
    return await this.dataSource.transaction(async (manager) => {
      return await manager.update(User, id, {
        password: this.b64Encode(newPassword),
      })
    })
  }
  
  async create(
    email: string,
    password: string,
    age: number,
    gender: string,
    firstName: string,
    lastName: string,
  ): Promise<boolean> {
    return await this.dataSource
      .transaction(async (manager) => {
        const user = manager.create(User, {
          email: email,
          password: this.b64Encode(password),
          points: 0,
          age: age,
          gender: gender,
          firstName: firstName,
          lastName: lastName,
        })
        return await manager.save(user).then(() => true)
      })
      .catch((err) => {
        throw new BadRequestException(err['sqlMessage'])
      })
    return false
  }
}
