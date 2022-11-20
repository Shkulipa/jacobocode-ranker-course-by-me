import { RequestWithAuth } from './types';
import { JwtService } from '@nestjs/jwt';
import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
  Logger,
} from '@nestjs/common';

@Injectable()
export class ControllerAuthGuard implements CanActivate {
  private readonly logger = new Logger(ControllerAuthGuard.name);
  constructor(private readonly jwtService: JwtService) {}

  canActivate(context: ExecutionContext): boolean | Promise<boolean> {
    const req: RequestWithAuth = context.switchToHttp().getRequest();

    this.logger.debug(`Checking for auth token on request body`, req.body);

    const { accessToken } = req.body;

    try {
      const payload = this.jwtService.verify(accessToken);
      req.userID = payload.sub;
      req.pollID = payload.pollID;
      req.name = payload.name;

      return true;
    } catch (err) {
      throw new ForbiddenException('Invalid authorization token');
    }
  }
}
