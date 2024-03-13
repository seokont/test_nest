import { Test, TestingModule } from '@nestjs/testing';
import { AutosController } from './auto.controller';
import { AutosService } from './auto.service';

describe('AutosController', () => {
  let controller: AutosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AutosController],
      providers: [AutosService],
    }).compile();

    controller = module.get<AutosController>(AutosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
