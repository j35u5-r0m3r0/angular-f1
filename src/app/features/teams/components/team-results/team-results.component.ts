import { Component, Input } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { Race } from '../../interfaces/teamResultsResp.interface';

@Component({
  selector: 'app-team-results',
  templateUrl: './team-results.component.html',
  styleUrls: ['./team-results.component.css']
})
export class TeamResultsComponent {

  @Input()
  constructorId!: string;
  @Input()
  seasons!: string[];

  races: Race[] = [];

  constructor(
    private apiService: ApiService
  ) { }

  ngOnChanges(): void {
    if (this.seasons.length>0) {
      this.getTeamRaces(this.seasons[0]);
    }
  }

  getTeamRaces(season: string) {
    this.apiService.getTeamResults(season, this.constructorId).subscribe((resp:any) =>{
      this.races = resp.MRData.RaceTable.Races;
      console.log('constructor',this.races);
    });
  }

}
