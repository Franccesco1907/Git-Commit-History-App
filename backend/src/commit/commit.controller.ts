import { Body, Controller, Get, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { CommitService } from './commit.service';

@Controller('commit')
export class CommitController {
  constructor(private readonly commitService: CommitService) { }

  @Get()
  @HttpCode(HttpStatus.OK)
  getCommits() {
    return this.commitService.getAll();
  }

  @Post('filter')
  @HttpCode(HttpStatus.OK)
  getByMessage(@Body() body) {
    return this.commitService.getByMessage(body.message);
  }
}
