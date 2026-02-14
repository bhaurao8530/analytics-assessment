import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { FileService } from './common/file.service';
import { CampaignService } from './campaign/campaign.service';
import { InvestorService } from './investor/investor.service';
import { ReportsService } from './reports/reports.service';
import { SeedService } from './seed/seed.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService,
    FileService,
    CampaignService,
    InvestorService,
    ReportsService,
    SeedService,
  ],
})
export class AppModule {}
