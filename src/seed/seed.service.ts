import { Injectable } from '@nestjs/common';
import { CampaignService } from '../campaign/campaign.service';
import { InvestorService } from '../investor/investor.service';
import { ReportsService } from '../reports/reports.service';

@Injectable()
export class SeedService {

  constructor(
    private campaign: CampaignService,
    private investor: InvestorService,
    private reports: ReportsService
  ) {}

  run() {
    this.campaign.generate();
    this.investor.generate();
    this.reports.generate();
    return "Generated all analytics files";
  }
}
