import { Test, TestingModule } from '@nestjs/testing';
import { CommitController } from './commit.controller';
import { CommitService } from './commit.service';

const mockData = [
  { commit: { message: 'feat(backend): add dockerfile and .dockerignore' } },
  { commit: { message: 'perf(backend): add cors enable' } },
  { commit: { message: 'feat(frontend): add dockerfile and .gitignore' } },
];

describe('CommitController', () => {
  let controller: CommitController;
  let commitService: CommitService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CommitController],
      providers: [
        {
          provide: CommitService,
          useValue: {
            getCommits: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<CommitController>(CommitController);
    commitService = module.get<CommitService>(CommitService);
  });

  describe('GET /commit', () => {
    it('should return filtered commits when a valid query is provided', async () => {
      const query = 'backend';
      const filteredCommits = mockData.filter((commit) => commit.commit.message.match(query));

      commitService.getCommits = jest.fn().mockResolvedValue(filteredCommits);

      const result = await controller.getCommits(query);

      expect(result).toEqual(filteredCommits);
      expect(commitService.getCommits).toHaveBeenCalledWith(query);
    });

    it('should return an empty array when no query is provided', async () => {
      const emptyQuery = '';
      const allCommits = mockData;

      commitService.getCommits = jest.fn().mockResolvedValue(allCommits);

      const result = await controller.getCommits(emptyQuery);

      expect(result).toEqual(allCommits);
      expect(commitService.getCommits).toHaveBeenCalledWith(emptyQuery);
    });

    it('should return HTTP 500 when an error occurs', async () => {
      const query = 'Commit message';

      commitService.getCommits = jest.fn().mockRejectedValue(new Error('Test error'));

      try {
        await controller.getCommits(query);
      } catch (error) {
        expect(error.status).toBe(500);
        expect(error.message).toBe('Internal Server Error');
      }
    });
  });
});
