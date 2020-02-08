import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TransactionByDurationComponent} from './transaction-by-duration.component';

describe('TransactionByDurationComponent', () => {
  let component: TransactionByDurationComponent;
  let fixture: ComponentFixture<TransactionByDurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TransactionByDurationComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionByDurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
