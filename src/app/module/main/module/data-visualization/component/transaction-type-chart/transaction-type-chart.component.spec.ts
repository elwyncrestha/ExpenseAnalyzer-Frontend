import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TransactionTypeChartComponent} from './transaction-type-chart.component';

describe('TransactionTypeChartComponent', () => {
  let component: TransactionTypeChartComponent;
  let fixture: ComponentFixture<TransactionTypeChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TransactionTypeChartComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionTypeChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
