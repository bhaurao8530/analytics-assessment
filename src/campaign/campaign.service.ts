import { Injectable } from '@nestjs/common';
import { FileService } from '../common/file.service';

@Injectable()
export class CampaignService {
  constructor(private file: FileService) {}

  generate() {

    const campaigns = this.file.readJSON('campaigns.json');
    const transactions = this.file.readJSON('transactions.json');

    const invested = transactions.filter(t => t.status === 'invested');

    let id = 1;
    const result = campaigns.map(c => {

      const tx = invested.filter(t => t.campaign_id === c.id);

      const totalRaised =
        tx.reduce((s, t) => s + Number(t.amount), 0);

      const investors =
        new Set(tx.map(t => t.investor_id)).size;

      return {
        id: id++,
        campaign_id: c.id,
        analytics_date: new Date().toISOString(),
        total_investors: investors,
        total_raised: totalRaised,
        minimum_commitment: c.minimum_amt_commitment
      };
    });

    this.file.writeJSON(
      'output/campaign-analytics.json',
      result
    );

    return result;
  }
}
