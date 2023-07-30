import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditOrderComponent } from './edit-order.component';

describe('EditOrderComponent', () => {
  let component: EditOrderComponent;
  let fixture: ComponentFixture<EditOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditOrderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
