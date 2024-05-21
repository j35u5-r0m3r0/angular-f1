import { Component, Input } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-driver-results',
  templateUrl: './driver-results.component.html',
  styleUrls: ['./driver-results.component.css']
})
export class DriverResultsComponent {


  @Input()
  driverId!: string;
  @Input()
  seasons!: string[];

  @Input()
  results!: any[];


  constructor(
    private apiService: ApiService
  ) { }

  ngOnChanges(): void {
    if (this.seasons.length>0) {
      this.getDriverRaces(this.seasons[0]);
    }
  }

  getDriverRaces(season: string) {
    this.apiService.getDriverResults(season, this.driverId).subscribe((resp:any) =>{
      this.results = resp.MRData.RaceTable.Races;
      console.log('results',this.results);
    });
  }

}
