import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GProduitComponent } from './g-produit.component';

describe('GProduitComponent', () => {
  let component: GProduitComponent;
  let fixture: ComponentFixture<GProduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GProduitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
