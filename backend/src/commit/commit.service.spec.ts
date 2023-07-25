import { HttpService } from '@nestjs/axios';
import { Test, TestingModule } from '@nestjs/testing';
import { of } from 'rxjs';
import { CommitService } from './commit.service';

const mockData = [
  { commit: { message: 'feat(backend): add dockerfile and .dockerignore' } },
  { commit: { message: 'perf(backend): add cors enable' } },
  { commit: { message: 'feat(frontend): add dockerfile and .gitignore' } },
];

const httpServiceMock = {
  get: jest.fn(() => of({ data: mockData })),
};

describe('CommitService', () => {
  let service: CommitService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CommitService,
        { provide: HttpService, useValue: httpServiceMock },
      ],
    }).compile();

    service = module.get<CommitService>(CommitService);
  });


  describe('getCommits', () => {
    it('should return filtered commits that match the query', async () => {
      const query = 'backend';

      const result = await service.getCommits(query);

      expect(result).toHaveLength(2);
      expect(result[0].commit.message).toContain(query);
      expect(result[1].commit.message).toContain(query);
    });

    it('should return all commits when query is empty', async () => {
      const query = '';

      const result = await service.getCommits(query);

      expect(result).toHaveLength(3);
    });

    it('should return an empty array when there is no match for the query', async () => {
      const query = 'devops';

      const result = await service.getCommits(query);

      expect(result).toHaveLength(0);
    });
  });
});
