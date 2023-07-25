import { Controller, Get, HttpCode, HttpException, HttpStatus, Query } from '@nestjs/common';
import { ApiInternalServerErrorResponse, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CommitService } from './commit.service';

@ApiTags('commit')
@Controller('commit')
export class CommitController {
  constructor(private readonly commitService: CommitService) { }

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiResponse({ status: HttpStatus.OK, description: 'The commits were retrieved.' })
  @ApiResponse({ status: HttpStatus.INTERNAL_SERVER_ERROR, description: 'The commits could not be retrieved.' })
  @ApiInternalServerErrorResponse({ description: 'Github API Server Error' })
  @ApiQuery({ name: 'query', required: false, type: String })
  async getCommits(@Query('query') query: string) {
    try {
      return await this.commitService.getCommits(query);
    } catch (error) {
      throw new HttpException('Internal Server Error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
