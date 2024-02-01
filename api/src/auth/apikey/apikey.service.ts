import { Injectable } from '@nestjs/common';

@Injectable()
export class ApikeyService {

    KEYS = ["oidfgkneogfijdkfb8"]

    isKeyValid(key: string) {
        return this.KEYS.includes(key)
    }
}
