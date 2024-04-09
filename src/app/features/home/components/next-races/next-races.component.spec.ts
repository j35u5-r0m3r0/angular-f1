import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextRacesComponent } from './next-races.component';

describe('NextRacesComponent', () => {
  let component: NextRacesComponent;
  let fixture: ComponentFixture<NextRacesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NextRacesComponent]
    });
    fixture = TestBed.createComponent(NextRacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
