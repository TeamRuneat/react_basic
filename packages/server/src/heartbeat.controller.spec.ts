import { Test, TestingModule } from '@nestjs/testing';
import { HeartbeatController } from './heartbeat.controller';

describe('HeartbeatController', () => {
  let controller: HeartbeatController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HeartbeatController],
    }).compile();

    controller = module.get<HeartbeatController>(HeartbeatController);
  });

  it('[method] l7check: 서버가 정상적으로 뜨는지 확인한다', () => {
    expect(controller.sayHello()).toEqual('ok');
  });
});
