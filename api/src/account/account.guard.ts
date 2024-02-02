import { CanActivate, ExecutionContext, HttpStatus } from "@nestjs/common"

export class AccountGuard implements CanActivate {

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const req = context.switchToHttp().getRequest()
        const res = context.switchToHttp().getResponse()
        const user = req.user

        if(user) 
            return true

        res.sendStatus(HttpStatus.PRECONDITION_REQUIRED)
        return false
    }
}