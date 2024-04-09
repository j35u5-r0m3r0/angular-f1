import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestsResultsComponent } from './latests-results.component';

describe('LatestsResultsComponent', () => {
  let component: LatestsResultsComponent;
  let fixture: ComponentFixture<LatestsResultsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LatestsResultsComponent]
    });
    fixture = TestBed.createComponent(LatestsResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
