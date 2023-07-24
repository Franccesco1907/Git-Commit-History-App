import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { CommitService } from './commit.service';
import { CommitController } from './commit.controller';
import { ConfigService } from '@nestjs/config';
@Module({
  imports: [
    HttpModule.registerAsync({
      useFactory: async (configService: ConfigService) => ({
        baseURL:
          `${configService.get<string>('GITHUB_API_URL')}/repos/${configService.get<string>('GITHUB_OWNER')}/${configService.get<string>('GITHUB_REPO')}/commits`,
        headers: {
          Authorization: configService.get<string>('GITHUB_API_TOKEN'),
        },
      }),
      inject: [ConfigService],
    })
  ],
  controllers: [CommitController],
  providers: [CommitService, ConfigService]
})
export class CommitModule { }
