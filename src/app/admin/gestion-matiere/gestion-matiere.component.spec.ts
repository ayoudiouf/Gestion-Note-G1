import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionMatiereComponent } from './gestion-matiere.component';

describe('GestionMatiereComponent', () => {
  let component: GestionMatiereComponent;
  let fixture: ComponentFixture<GestionMatiereComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionMatiereComponent]
    });
    fixture = TestBed.createComponent(GestionMatiereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
