import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverStadingsComponent } from './driver-stadings.component';

describe('DriverStadingsComponent', () => {
  let component: DriverStadingsComponent;
  let fixture: ComponentFixture<DriverStadingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DriverStadingsComponent]
    });
    fixture = TestBed.createComponent(DriverStadingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
