import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { SeedService } from './seed/seed.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly seedService: SeedService,
  ) {}

  // Default route
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // NEW route -> runs assessment logic
  @Get('seed')
  runSeed() {
    return this.seedService.run();
  }
}
