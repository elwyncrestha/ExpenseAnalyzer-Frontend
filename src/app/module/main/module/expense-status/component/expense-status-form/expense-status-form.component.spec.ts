import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ExpenseStatusFormComponent} from './expense-status-form.component';

describe('ExpenseStatusFormComponent', () => {
  let component: ExpenseStatusFormComponent;
  let fixture: ComponentFixture<ExpenseStatusFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ExpenseStatusFormComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenseStatusFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
