import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProduitComponent } from './edit-produit.component';

describe('EditProduitComponent', () => {
  let component: EditProduitComponent;
  let fixture: ComponentFixture<EditProduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProduitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
