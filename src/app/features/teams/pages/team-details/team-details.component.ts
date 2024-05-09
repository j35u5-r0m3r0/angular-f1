import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { Constructor } from '../../interfaces/teamInfoResp.interface';


@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.css']
})
export class TeamDetailsComponent {
  
  constructorId: string = "";
  team!: Constructor;
  seasons: string[] = [];

  constructor(
    private apiService: ApiService
  ){ }

  private route = inject(ActivatedRoute);

  ngOnInit(): void {     
    this.constructorId = String(this.route.snapshot.paramMap.get('constructorId'));
    this.getTeamInfo(this.constructorId);
    this.getTeamSeasons(this.constructorId);
  }

  getTeamInfo(id: string): void {
    this.apiService.getTeamInfo(id).subscribe((resp:any) =>{
      this.team = resp.MRData.ConstructorTable.Constructors[0];
      console.log('constructor',this.team);
    });
  }

  getTeamSeasons(id:string): void {
    this.apiService.getTeamSeasons(id).subscribe((resp:any) => {
      const valoresSeason = resp.MRData.SeasonTable.Seasons.map((s: { season: any; }) => s.season);
      this.seasons = valoresSeason.sort((a: number,b: number) => b - a);
    });
  }
}
