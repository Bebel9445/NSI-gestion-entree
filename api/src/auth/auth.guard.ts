import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { jwtConstants } from "./constants"
import { Request } from "express"
import { Reflector } from "@nestjs/core"
import { IS_PUBLIC_KEY } from "./public/public.decorator"
import { ApikeyService } from "./apikey/apikey.service"
import { IS_API_KEY } from "./apikey/apikey.decorator"

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private jwtService: JwtService, private reflector: Reflector, private apiKeyService: ApikeyService) {}

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [context.getHandler(), context.getClass()])
        if(isPublic)
            return true

        const request = context.switchToHttp().getRequest()

        /*
            Here we check if the request contains a valid API-key.
        */
        const key = request.headers['x-api-key'] ?? request.query.api_key
        if(key)
            return await this.apiKeyService.isKeyValid(key)

        /*
            If the route is marked as accepting only API-key requests and the request does not contain an API-key,
            we throw an UnauthorizedException. This is used for the routes that manage the user's balance.
        */
        const isApiKeyOnly = this.reflector.getAllAndOverride<boolean>(IS_API_KEY, [context.getHandler(), context.getClass()])
        if(isApiKeyOnly)
            throw new UnauthorizedException()

        /*
            Here we simply check if the request contains a valid JWT token. 
            If it does, we attach the user's payload to the request object.

            NOTE: The following code is only executed if the route is not marked as public or API-key only,
            and the request doesn't contain an API-key.
        */
        const token = this.extractTokenFromHeader(request)
        if (request.headers.authorization && !token){
            throw new UnauthorizedException()
        }

        try {
            const payload = await this.jwtService.verifyAsync(
                token,
                {
                    secret: jwtConstants.secret
                }
            )
            request['user'] = payload
        } catch {
            throw new UnauthorizedException()
        }
        return true
    }

    /**
     * Extracts/Fetches the user's JWT token from the request object
     * @param request The request object (we will fetch the authorization header)
     * @returns The JWT token if it exists, otherwise undefined
     */
    private extractTokenFromHeader(request: Request): string | undefined {
        const [type, token] = request.headers.authorization?.split(' ') ?? []
        return type === 'Bearer' ? token : undefined
    }
}