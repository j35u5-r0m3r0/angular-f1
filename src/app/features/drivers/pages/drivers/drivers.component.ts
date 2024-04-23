import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.css']
})
export class DriversComponent implements OnInit {
  
  drivers: any = {};

  constructor(
    private apiService: ApiService,
    private router: Router
  ){}

  ngOnInit(){
    this.getCurrentDriverStandings();
  }

  getCurrentDriverStandings(){
    this.apiService.getCurrentDriverStandings().subscribe((resp:any) => {
      this.drivers = resp.MRData.StandingsTable.StandingsLists[0].DriverStandings;
      
      });
    
  }

  openDriver(driverId:number){
    console.log("driverId=",driverId);
    this.router.navigate([`./drivers/${driverId}`]);
  }

}
