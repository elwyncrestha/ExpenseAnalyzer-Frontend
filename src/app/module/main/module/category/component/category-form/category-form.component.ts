import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SnackBarService} from '../../../../../../@theme/angular-material/service/snack-bar.service';
import {MatDialogRef} from '@angular/material/dialog';
import {ObjectUtils} from '../../../../../../@core/utils/object.utils';
import {Category} from '../../../../../../@core/model/category';
import {CategoryService} from '../../../../../../@core/service/category.service';
import {
  DialogResponse,
  DialogResponseType
} from '../../../../../../@core/model/dialog-response-type.enum';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss']
})
export class CategoryFormComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private snackBarService: SnackBarService,
    private dialogRef: MatDialogRef<CategoryFormComponent, DialogResponse>,
    private categoryService: CategoryService
  ) {
  }

  get controls() {
    return this.form.controls;
  }

  ngOnInit() {
    this.buildForm(new Category());
  }

  buildForm(model: Category): void {
    this.form = this.formBuilder.group({
      _id: [
        ObjectUtils.setUndefinedIfNull(model._id)
      ],
      name: [
        ObjectUtils.setUndefinedIfNull(model.name),
        [Validators.required]
      ]
    });
  }

  submit(): void {
    const category = this.form.value as Category;
    this.categoryService.save(category).subscribe(() => {
      this.snackBarService.open('Successfully saved category');
      this.dialogRef.close(new DialogResponse(DialogResponseType.SUCCESS, 'Successfully saved category'));
    }, error => {
      console.error(error);
      this.snackBarService.open('Failed to save category');
      this.dialogRef.close(new DialogResponse(DialogResponseType.ERROR, 'Successfully saved category'));
    });
  }
}
