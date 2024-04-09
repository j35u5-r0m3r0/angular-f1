import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryDriversListComponent } from './history-drivers-list.component';

describe('HistoryDriversListComponent', () => {
  let component: HistoryDriversListComponent;
  let fixture: ComponentFixture<HistoryDriversListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HistoryDriversListComponent]
    });
    fixture = TestBed.createComponent(HistoryDriversListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
