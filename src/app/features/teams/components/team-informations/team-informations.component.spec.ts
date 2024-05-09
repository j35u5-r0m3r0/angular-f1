import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamInformationsComponent } from './team-informations.component';

describe('TeamInformationsComponent', () => {
  let component: TeamInformationsComponent;
  let fixture: ComponentFixture<TeamInformationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeamInformationsComponent]
    });
    fixture = TestBed.createComponent(TeamInformationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
