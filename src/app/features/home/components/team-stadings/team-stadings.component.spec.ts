import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamStadingsComponent } from './team-stadings.component';

describe('TeamStadingsComponent', () => {
  let component: TeamStadingsComponent;
  let fixture: ComponentFixture<TeamStadingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeamStadingsComponent]
    });
    fixture = TestBed.createComponent(TeamStadingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
