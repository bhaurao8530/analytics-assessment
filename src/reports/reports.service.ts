import { Injectable } from '@nestjs/common';
import { FileService } from '../common/file.service';

@Injectable()
export class ReportsService {
  constructor(private file: FileService) {}

  generate() {

    const campaigns =
      this.file.readJSON('output/campaign-analytics.json');

    const investors =
      this.file.readJSON('output/investor-insights.json');

    const reports: any[] = [];

    campaigns.forEach(c => {
      reports.push({
        type: 'campaign',
        ref_id: c.campaign_id,
        value: c.total_raised
      });
    });

    investors.forEach(i => {
      reports.push({
        type: 'investor',
        ref_id: i.investor_id,
        value: i.total_invested
      });
    });

    this.file.writeJSON(
      'output/analytics-reports.json',
      reports
    );

    return reports;
  }
}
