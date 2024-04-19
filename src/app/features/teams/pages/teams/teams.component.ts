import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  teams: any = {};
  
  constructor(
    private apiService: ApiService,
    private router: Router
  ){}

  ngOnInit(){
    this.getCurrentTeamStandings();
  }

  getCurrentTeamStandings(){
    this.apiService.getCurrentTeamStandings().subscribe((resp:any) => {
      this.teams = resp.MRData.StandingsTable.StandingsLists[0].ConstructorStandings;
      
      });
    
  }

  openConstructor(constructorId:number){
    console.log("constructorId=",constructorId);
    this.router.navigate([`./teams/${constructorId}`]);
  }

}
