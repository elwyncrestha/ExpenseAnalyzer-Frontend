import {Component, OnInit} from '@angular/core';
import {Category} from '../../../../../../@core/model/category';
import {CategoryService} from '../../../../../../@core/service/category.service';
import {SnackBarService} from '../../../../../../@theme/angular-material/service/snack-bar.service';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner/typings/progress-spinner';
import {PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  cardValues = {
    expense: 0,
    income: 0
  };
  dataSource: Array<Category>;
  progressSpinnerMode: ProgressSpinnerMode = 'indeterminate';
  spinner = false;
  paginator = {
    options: [5, 10, 15, 20],
    size: 10,
    length: 1,
    page: 1
  };

  constructor(
    private categoryService: CategoryService,
    private snackBarService: SnackBarService
  ) {
  }

  static load(component: CategoryComponent) {
    component.spinner = true;
    component.categoryService.getPageable(component.paginator.page, component.paginator.size)
    .subscribe((response: any) => {
      component.dataSource = response.detail.content;
      component.paginator.length = response.detail.totalElements;
      component.spinner = false;
    }, error => {
      console.error(error);
      component.snackBarService.open('Failed to load categories');
      component.spinner = false;
    });
  }

  ngOnInit() {
    CategoryComponent.load(this);
  }

  changePage($event: PageEvent) {
    console.log($event);
    this.paginator.page = $event.pageIndex + 1;
    this.paginator.size = $event.pageSize;
    CategoryComponent.load(this);
  }
}
