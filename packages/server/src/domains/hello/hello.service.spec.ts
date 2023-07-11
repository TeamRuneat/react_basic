import { Test, TestingModule } from '@nestjs/testing';
import { HelloService } from './hello.service';

describe('HelloService', () => {
  let service: HelloService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HelloService],
    }).compile();

    service = module.get<HelloService>(HelloService);
  });

  it('[method] getHello: 헬로 라고 말해준다', () => {
    expect(service.getHello()).toEqual('hello world!');
  });
});
