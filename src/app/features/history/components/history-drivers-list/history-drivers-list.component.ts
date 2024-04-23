import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-history-drivers-list',
  templateUrl: './history-drivers-list.component.html',
  styleUrls: ['./history-drivers-list.component.css']
})
export class HistoryDriversListComponent implements OnInit{
  
  @Input() drivers: any = {};

  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {}

  openDriver(driverId:number){
    console.log("driverId=",driverId);
    this.router.navigate([`./drivers/${driverId}`]);
  }
  
}
