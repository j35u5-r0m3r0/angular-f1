import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { Driver } from '../../interfaces/driverInfoResp.interface';
import { Race } from '../../interfaces/driverResultsResp.interface';

@Component({
  selector: 'app-driver-details',
  templateUrl: './driver-details.component.html',
  styleUrls: ['./driver-details.component.css']
})
export class DriverDetailsComponent implements OnInit {

  driverId: string = "";
  driver!: Driver;
  seasons: string[] = [];

  constructor(
    private apiService: ApiService
  ){

  }

  private route = inject(ActivatedRoute);

  ngOnInit(): void {     
    this.driverId = String(this.route.snapshot.paramMap.get('driverId'));
    this.getDriverInfo(this.driverId);
    this.getDriverSeasons(this.driverId);
  }

  getDriverInfo(id: string): void {
    this.apiService.getDriverInfo(id).subscribe((resp:any) =>{
      this.driver = resp.MRData.DriverTable.Drivers[0];
      console.log('driver',this.driver);
    });
  }

  getDriverSeasons(id:string): void {
    this.apiService.getDriverSeasons(id).subscribe((resp:any) => {
      const valoresSeason = resp.MRData.SeasonTable.Seasons.map((s: { season: any; }) => s.season);
      this.seasons = valoresSeason.sort((a: number,b: number) => b - a);
    });
  }
}
