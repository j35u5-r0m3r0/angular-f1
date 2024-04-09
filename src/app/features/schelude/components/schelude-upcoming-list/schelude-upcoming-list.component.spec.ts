import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheludeUpcomingListComponent } from './schelude-upcoming-list.component';

describe('ScheludeUpcomingListComponent', () => {
  let component: ScheludeUpcomingListComponent;
  let fixture: ComponentFixture<ScheludeUpcomingListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScheludeUpcomingListComponent]
    });
    fixture = TestBed.createComponent(ScheludeUpcomingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
