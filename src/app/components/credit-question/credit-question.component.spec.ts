import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditQuestionComponent } from './credit-question.component';

describe('CreditQuestionComponent', () => {
  let component: CreditQuestionComponent;
  let fixture: ComponentFixture<CreditQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreditQuestionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreditQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
