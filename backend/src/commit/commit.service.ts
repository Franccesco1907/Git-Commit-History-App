import { HttpService } from '@nestjs/axios';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { GithubCommit } from './interfaces';


@Injectable()
export class CommitService {
  constructor(
    private readonly httpService: HttpService,
  ) { }

  async getAll(): Promise<GithubCommit[]> {
    try {
      const { data } = await firstValueFrom(this.httpService.get(''));
      return data;
    } catch (error) {
      console.error(`The following error has occurred: ${error}`);
      throw new HttpException(`The commits could not be retrieved`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async getByMessage(message): Promise<GithubCommit[]> {
    try {
      const { data } = await firstValueFrom(this.httpService.get(''));
      return data.filter((commit) => commit.commit.message.match(message));
    } catch (error) {
      console.error(`The following error has occurred: ${error}`);
      throw new HttpException(`The commits could not be retrieved`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
