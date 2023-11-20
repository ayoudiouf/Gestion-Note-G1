import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceuilFormateurComponent } from './acceuil-formateur.component';

describe('AcceuilFormateurComponent', () => {
  let component: AcceuilFormateurComponent;
  let fixture: ComponentFixture<AcceuilFormateurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcceuilFormateurComponent]
    });
    fixture = TestBed.createComponent(AcceuilFormateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
