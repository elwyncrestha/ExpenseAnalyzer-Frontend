import {Component, OnInit} from '@angular/core';
import {ExpenseService} from '../../../../../../@core/service/expense.service';
import {SnackBarService} from '../../../../../../@theme/angular-material/service/snack-bar.service';

@Component({
  selector: 'app-transaction-by-duration-chart',
  templateUrl: './transaction-by-duration-chart.component.html',
  styleUrls: ['./transaction-by-duration-chart.component.scss']
})
export class TransactionByDurationChartComponent implements OnInit {
  static INCOME = 'Income';
  static EXPENSE = 'Expense';
  static TODAY = 'Today';
  static THIS_WEEK = 'This Week';
  static THIS_MONTH = 'This Month';
  static THIS_YEAR = 'This Year';

  multi: TransactionByDurationChart[];
  view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Time';
  showYAxisLabel = true;
  yAxisLabel = 'Amount';
  legendTitle = 'Legend';

  colorScheme = {
    domain: ['#5AA454', '#C7B42C']
  };

  constructor(
    private service: ExpenseService,
    private snackBarService: SnackBarService
  ) {
  }

  ngOnInit(): void {
    this.getChartsData();
  }

  getChartsData(): void {
    this.service.getTransactionsDataByDuration().subscribe((response: any) => {
      const data = response.detail;
      this.multi = new Array<TransactionByDurationChart>();

      // Today
      const todayTransaction = new TransactionByDurationChart();
      todayTransaction.name = TransactionByDurationChartComponent.TODAY;
      todayTransaction.series = [];
      todayTransaction.series.push({
        name: TransactionByDurationChartComponent.EXPENSE,
        value: this.calculateSumOfExpense(data.today.expense)
      });
      todayTransaction.series.push({
        name: TransactionByDurationChartComponent.INCOME,
        value: this.calculateSumOfExpense(data.today.income)
      });

      // This week
      const weekTransaction = new TransactionByDurationChart();
      weekTransaction.name = TransactionByDurationChartComponent.THIS_WEEK;
      weekTransaction.series = [];
      weekTransaction.series.push({
        name: TransactionByDurationChartComponent.EXPENSE,
        value: this.calculateSumOfExpense(data.thisWeek.expense)
      });
      weekTransaction.series.push({
        name: TransactionByDurationChartComponent.INCOME,
        value: this.calculateSumOfExpense(data.thisWeek.income)
      });

      // This month
      const monthTransaction = new TransactionByDurationChart();
      monthTransaction.name = TransactionByDurationChartComponent.THIS_MONTH;
      monthTransaction.series = [];
      monthTransaction.series.push({
        name: TransactionByDurationChartComponent.EXPENSE,
        value: this.calculateSumOfExpense(data.thisMonth.expense)
      });
      monthTransaction.series.push({
        name: TransactionByDurationChartComponent.INCOME,
        value: this.calculateSumOfExpense(data.thisMonth.income)
      });

      // This year
      const yearTransaction = new TransactionByDurationChart();
      yearTransaction.name = TransactionByDurationChartComponent.THIS_YEAR;
      yearTransaction.series = [];
      yearTransaction.series.push({
        name: TransactionByDurationChartComponent.EXPENSE,
        value: this.calculateSumOfExpense(data.thisYear.expense)
      });
      yearTransaction.series.push({
        name: TransactionByDurationChartComponent.INCOME,
        value: this.calculateSumOfExpense(data.thisYear.income)
      });

      this.multi.push(todayTransaction, weekTransaction, monthTransaction, yearTransaction);
    }, error => {
      console.error(error);
      this.snackBarService.open('Failed to load transaction chart');
    });
  }

  private calculateSumOfExpense(array: Array<any>): number {
    if (array.length === 0) {
      return 0;
    }

    let sum = 0;
    array.forEach(v => sum += v.amount);
    return sum;
  }
}

export class TransactionByDurationChart {
  name: string;
  series: { name: string, value: number }[];
}
