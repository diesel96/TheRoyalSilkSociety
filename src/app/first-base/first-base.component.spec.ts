import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstBaseComponent } from './first-base.component';

describe('FirstBaseComponent', () => {
  let component: FirstBaseComponent;
  let fixture: ComponentFixture<FirstBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstBaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
