import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceuilApprenantComponent } from './acceuil-apprenant.component';

describe('AcceuilApprenantComponent', () => {
  let component: AcceuilApprenantComponent;
  let fixture: ComponentFixture<AcceuilApprenantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcceuilApprenantComponent]
    });
    fixture = TestBed.createComponent(AcceuilApprenantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
