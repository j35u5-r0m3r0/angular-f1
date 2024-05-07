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

  driver!: Driver;
  races: Race[] = [];
  season: string = "current";

  constructor(
    private apiService: ApiService
  ){

  }

  private route = inject(ActivatedRoute);

  ngOnInit(): void {     
    const id = String(this.route.snapshot.paramMap.get('driverId'));
    this.getDriverInfo(id);
    this.getDriverResults(this.season,id);
  }

  getDriverInfo(id: string): void {
    this.apiService.getDriverInfo(id).subscribe((resp:any) =>{
      this.driver = resp.MRData.DriverTable.Drivers[0];
      console.log('driver',this.driver);
    });
  }

  getDriverResults(seasson:string, id:string): void {
    this.apiService.getDriverResults(seasson, id).subscribe((resp:any) => {
      this.races = resp.MRData.RaceTable.Races;
      console.log('results',resp);
    });
  }
}
