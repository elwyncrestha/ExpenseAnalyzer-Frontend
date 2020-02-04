import {Component, OnInit} from '@angular/core';
import {CategoryService} from '../../../../../../@core/service/category.service';
import {SnackBarService} from '../../../../../../@theme/angular-material/service/snack-bar.service';

@Component({
  selector: 'app-category-chart',
  templateUrl: './category-chart.component.html',
  styleUrls: ['./category-chart.component.scss']
})
export class CategoryChartComponent implements OnInit {

  results = [
    {
      name: 'Income',
      value: 0
    },
    {
      name: 'Expense',
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
    private categoryService: CategoryService,
    private snackBarService: SnackBarService
  ) {
  }

  onSelect(data): void {
    if (data.label === 'Expense') {
      this.snackBarService.open(`You have ${data.value} total expense categories.`);
    } else if (data.label === 'Income') {
      this.snackBarService.open(`You have ${data.value} total income categories.`);
    }
  }

  ngOnInit() {
    this.categoryService.statusCount().subscribe((response: any) => {
      this.results = [];
      this.results.push({name: 'Income', value: response.detail.incomeCount});
      this.results.push({name: 'Expense', value: response.detail.expenseCount});
    }, error => {
      console.error(error);
      this.snackBarService.open('Failed to load status counts');
    });
  }

}
