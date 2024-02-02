import { Module } from '@nestjs/common';
import { ApikeyService } from './apikey.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Apikey } from './apikey.entity'

@Module({
    providers: [ApikeyService],
    imports: [TypeOrmModule.forFeature([Apikey])],
    exports: [ApikeyService]
})
export class ApikeyModule {}
