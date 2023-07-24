import { Controller, Get, HttpCode, HttpStatus, Query } from '@nestjs/common';
import { ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CommitService } from './commit.service';

@ApiTags('commit')
@Controller('commit')
export class CommitController {
  constructor(private readonly commitService: CommitService) { }

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiResponse({ status: HttpStatus.OK, description: 'The commits were retrieved.' })
  @ApiResponse({ status: HttpStatus.INTERNAL_SERVER_ERROR, description: 'The commits could not be retrieved.' })
  @ApiQuery({ name: 'query', required: false, type: String })
  getCommits(@Query('query') query: string) {
    return this.commitService.getCommits(query);
  }
}
