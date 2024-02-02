import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { Apikey } from './apikey.entity'
import { Repository } from 'typeorm'

@Injectable()
export class ApikeyService {
    constructor(
        @InjectRepository(Apikey)
        private apikeyRepository: Repository<Apikey>
    ) {}

    async isKeyValid(key: string) {
        return await this.apikeyRepository.existsBy({value: key})
    }
}
