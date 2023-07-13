import { Controller, Get } from '@nestjs/common';

@Controller('l7check')
export class HeartbeatController {
  @Get()
  sayHello() {
    return 'ok';
  }
}
