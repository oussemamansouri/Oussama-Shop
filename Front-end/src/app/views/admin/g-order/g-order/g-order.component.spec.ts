import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GOrderComponent } from './g-order.component';

describe('GOrderComponent', () => {
  let component: GOrderComponent;
  let fixture: ComponentFixture<GOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GOrderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
