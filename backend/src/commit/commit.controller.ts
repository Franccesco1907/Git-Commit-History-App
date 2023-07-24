import { Controller, Get, HttpCode, HttpStatus, Query } from '@nestjs/common';
import { CommitService } from './commit.service';

@Controller('commit')
export class CommitController {
  constructor(private readonly commitService: CommitService) { }

  @Get()
  @HttpCode(HttpStatus.OK)
  getCommits(@Query('query') query: string) {
    return this.commitService.getCommits(query);
  }
}
