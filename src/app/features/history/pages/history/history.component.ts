import { Component, OnInit, Output } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  @Output() drivers: any[] = [];
  @Output() teams: any[] = [];
  @Output() races: any[] = [];
  
  constructor(private apiService: ApiService){}

  ngOnInit(): void {
    this.getDrivers();
    this.getTeams();
    this.getRaces();
  }

  getDrivers(){
    this.apiService.getCurrentDriverStandings().subscribe((resp:any) => {
      this.drivers = resp.MRData.StandingsTable.StandingsLists[0].DriverStandings;
      });
  }

  getTeams(){
    this.apiService.getCurrentTeamStandings().subscribe((resp:any) => {
      this.teams = resp.MRData.StandingsTable.StandingsLists[0].ConstructorStandings;
      });
  }

  getRaces() {
    this.apiService.getCurrentRaces().subscribe((resp:any) => {
      this.races = resp.MRData.RaceTable.Races;
    });
  }

}
