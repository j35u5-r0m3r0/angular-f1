import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheludeComponent } from './schelude.component';

describe('ScheludeComponent', () => {
  let component: ScheludeComponent;
  let fixture: ComponentFixture<ScheludeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScheludeComponent]
    });
    fixture = TestBed.createComponent(ScheludeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
