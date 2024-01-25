import 'dotenv/config';
import * as process from "process";

export const jwtConstants = {
    secret: process.env.JWT_CONSTANT_SECRET
}