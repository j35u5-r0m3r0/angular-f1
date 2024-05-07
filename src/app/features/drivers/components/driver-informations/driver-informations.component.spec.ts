import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverInformationsComponent } from './driver-informations.component';

describe('DriverInformationsComponent', () => {
  let component: DriverInformationsComponent;
  let fixture: ComponentFixture<DriverInformationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DriverInformationsComponent]
    });
    fixture = TestBed.createComponent(DriverInformationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
