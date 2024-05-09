import { Component, Input } from '@angular/core';
import { Constructor } from '../../interfaces/teamInfoResp.interface';

@Component({
  selector: 'app-team-informations',
  templateUrl: './team-informations.component.html',
  styleUrls: ['./team-informations.component.css']
})
export class TeamInformationsComponent {
  @Input()
  info!: Constructor;
}
