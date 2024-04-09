import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryScheludeListComponent } from './history-schelude-list.component';

describe('HistoryScheludeListComponent', () => {
  let component: HistoryScheludeListComponent;
  let fixture: ComponentFixture<HistoryScheludeListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HistoryScheludeListComponent]
    });
    fixture = TestBed.createComponent(HistoryScheludeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
