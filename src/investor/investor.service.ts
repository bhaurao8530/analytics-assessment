import { Injectable } from '@nestjs/common';
import { FileService } from '../common/file.service';

@Injectable()
export class InvestorService {
  constructor(private file: FileService) {}

  generate() {

    const investors = this.file.readJSON('investors.json');
    const transactions = this.file.readJSON('transactions.json');

    const invested = transactions.filter(t => t.status === 'invested');

    let id = 1;

    const result = investors.map(inv => {

      const tx = invested.filter(t => t.investor_id === inv.id);

      const total =
        tx.reduce((s, t) => s + Number(t.amount), 0);

      return {
        id: id++,
        investor_id: inv.id,
        analytics_date: new Date().toISOString(),
        total_invested: total,
        investments_count: tx.length
      };
    });

    this.file.writeJSON(
      'output/investor-insights.json',
      result
    );

    return result;
  }
}
