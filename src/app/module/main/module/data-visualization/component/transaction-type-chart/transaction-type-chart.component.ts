import {Component, OnInit} from '@angular/core';
import {SnackBarService} from '../../../../../../@theme/angular-material/service/snack-bar.service';
import {ExpenseService} from '../../../../../../@core/service/expense.service';

@Component({
  selector: 'app-transaction-type-chart',
  templateUrl: './transaction-type-chart.component.html',
  styleUrls: ['./transaction-type-chart.component.scss']
})
export class TransactionTypeChartComponent implements OnInit {
  static INCOME_TRANSACTIONS = 'Income Transactions';
  static EXPENSE_TRANSACTIONS = 'Expense Transactions';

  results = [
    {
      name: TransactionTypeChartComponent.INCOME_TRANSACTIONS,
      value: 0
    },
    {
      name: TransactionTypeChartComponent.EXPENSE_TRANSACTIONS,
      value: 0
    },
  ];
  view: any[] = [700, 400];

  // options
  gradient = true;
  showLegend = true;
  showLabels = true;
  isDoughnut = false;
  legendPosition = 'below';

  colorScheme = {
    domain: ['#5AA454', '#A10A28']
  };

  constructor(
    private service: ExpenseService,
    private snackBarService: SnackBarService
  ) {
  }

  onSelect(data): void {
    if (data.label === TransactionTypeChartComponent.EXPENSE_TRANSACTIONS) {
      this.snackBarService.open(`You have ${data.value} total expense transactions.`);
    } else if (data.label === TransactionTypeChartComponent.INCOME_TRANSACTIONS) {
      this.snackBarService.open(`You have ${data.value} total income transactions.`);
    }
  }

  ngOnInit() {
    this.service.statusCount().subscribe((response: any) => {
      this.results = [];
      this.results.push({
        name: TransactionTypeChartComponent.INCOME_TRANSACTIONS,
        value: response.detail.incomeCount
      });
      this.results.push({
        name: TransactionTypeChartComponent.EXPENSE_TRANSACTIONS,
        value: response.detail.expenseCount
      });
    }, error => {
      console.error(error);
      this.snackBarService.open('Failed to load status counts');
    });
  }

}
