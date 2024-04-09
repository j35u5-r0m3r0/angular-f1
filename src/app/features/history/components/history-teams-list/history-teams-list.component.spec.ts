import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryTeamsListComponent } from './history-teams-list.component';

describe('HistoryTeamsListComponent', () => {
  let component: HistoryTeamsListComponent;
  let fixture: ComponentFixture<HistoryTeamsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HistoryTeamsListComponent]
    });
    fixture = TestBed.createComponent(HistoryTeamsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
