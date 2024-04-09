import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheludePastListComponent } from './schelude-past-list.component';

describe('ScheludePastListComponent', () => {
  let component: ScheludePastListComponent;
  let fixture: ComponentFixture<ScheludePastListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScheludePastListComponent]
    });
    fixture = TestBed.createComponent(ScheludePastListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
