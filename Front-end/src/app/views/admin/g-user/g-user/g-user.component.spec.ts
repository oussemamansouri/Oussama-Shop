import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GUserComponent } from './g-user.component';

describe('GUserComponent', () => {
  let component: GUserComponent;
  let fixture: ComponentFixture<GUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
