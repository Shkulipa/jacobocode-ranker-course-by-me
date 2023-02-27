import { WsUnauthorizedException } from './../exceptions/ws-exceptions';
import { AuthPayload, SocketWithAuth } from 'src/polls/types';
import { JwtService } from '@nestjs/jwt';
import {
  CanActivate,
  ExecutionContext,
  Injectable,
  Logger,
} from '@nestjs/common';
import { PollsService } from './polls.service';

@Injectable()
export class GatewayAdminGuard implements CanActivate {
  private readonly logger = new Logger(GatewayAdminGuard.name);
  constructor(
    private readonly jwtService: JwtService,
    private readonly pollsService: PollsService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const socket: SocketWithAuth = context.switchToWs().getClient();

    const token =
      socket.handshake.auth.token || socket.handshake.headers['token'];

    if (!token) {
      this.logger.error('No authorization token provided!');
      throw new WsUnauthorizedException('No token provided');
    }

    try {
      const payload = this.jwtService.verify<AuthPayload & { sub: string }>(
        token,
      );

      this.logger.debug(`Validation admin using token payload: ${payload}`);

      const { sub, pollID } = payload;

      const poll = await this.pollsService.getPoll(pollID);

      if (sub !== poll.adminID) {
        throw new WsUnauthorizedException('Admin privileges required');
      }

      return true;
    } catch {
      throw new WsUnauthorizedException('Admin privileges required');
    }
  }
}
