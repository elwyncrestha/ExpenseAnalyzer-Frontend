import {Component, OnInit} from '@angular/core';
import {ExpenseService} from '../../../../../../@core/service/expense.service';
import {SnackBarService} from '../../../../../../@theme/angular-material/service/snack-bar.service';

@Component({
  selector: 'app-transaction-by-duration-chart',
  templateUrl: './transaction-by-duration-chart.component.html',
  styleUrls: ['./transaction-by-duration-chart.component.scss']
})
export class TransactionByDurationChartComponent implements OnInit {

  multi: TransactionByDurationChart[] = [
    {
      name: 'Today',
      series: [
        {
          name: 'Expense',
          value: 7300000
        },
        {
          name: 'Income',
          value: 8940000
        }
      ]
    },

    {
      name: 'This Week',
      series: [
        {
          name: 'Expense',
          value: 7870000
        },
        {
          name: 'Income',
          value: 8270000
        }
      ]
    },

    {
      name: 'This Month',
      series: [
        {
          name: 'Expense',
          value: 5000002
        },
        {
          name: 'Income',
          value: 5800000
        }
      ]
    },

    {
      name: 'This Year',
      series: [
        {
          name: 'Expense',
          value: 5000002
        },
        {
          name: 'Income',
          value: 5800000
        }
      ]
    }
  ];
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
  }
}

export class TransactionByDurationChart {
  name: string;
  series: { name: string, value: number }[];
}
