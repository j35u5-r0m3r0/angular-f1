import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverResultsComponent } from './driver-results.component';

describe('DriverResultsComponent', () => {
  let component: DriverResultsComponent;
  let fixture: ComponentFixture<DriverResultsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DriverResultsComponent]
    });
    fixture = TestBed.createComponent(DriverResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
