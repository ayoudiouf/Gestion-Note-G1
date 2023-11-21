import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListerEvaluationComponent } from './lister-evaluation.component';

describe('ListerEvaluationComponent', () => {
  let component: ListerEvaluationComponent;
  let fixture: ComponentFixture<ListerEvaluationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListerEvaluationComponent]
    });
    fixture = TestBed.createComponent(ListerEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
