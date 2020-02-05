import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TransactionByDurationChartComponent} from './transaction-by-duration-chart.component';

describe('TransactionByDurationChartComponent', () => {
  let component: TransactionByDurationChartComponent;
  let fixture: ComponentFixture<TransactionByDurationChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TransactionByDurationChartComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionByDurationChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
