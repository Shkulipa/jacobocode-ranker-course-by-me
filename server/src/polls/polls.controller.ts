import { RequestWithAuth } from './types';
import { CreatePollDto, JoinPollDto } from './dtos';
import {
  Controller,
  Post,
  Body,
  UseGuards,
  Req,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { PollsService } from './polls.service';
import { ControllerAuthGuard } from './controller-auth.guard';

@UsePipes(new ValidationPipe())
@Controller('polls')
export class PollsController {
  constructor(private readonly pollsService: PollsService) {}

  @Post()
  async create(@Body() createPollDto: CreatePollDto) {
    const res = await this.pollsService.createPoll(createPollDto);
    return res;
  }

  @Post('/join')
  async join(@Body() joinPollDto: JoinPollDto) {
    const res = await this.pollsService.joinPoll(joinPollDto);
    return res;
  }

  @UseGuards(ControllerAuthGuard)
  @Post('/rejoin')
  async rejoin(@Req() req: RequestWithAuth) {
    const { userID, pollID, name } = req;
    const res = await this.pollsService.rejoinPoll({
      name,
      pollID,
      userID,
    });
    return res;
  }
}
