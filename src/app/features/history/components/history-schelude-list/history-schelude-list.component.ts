import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-history-schelude-list',
  templateUrl: './history-schelude-list.component.html',
  styleUrls: ['./history-schelude-list.component.css']
})
export class HistoryScheludeListComponent implements OnInit {
  
  @Input()  races: any = {};
  
  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {
    console.log("races",this.races);
  }

  openRace(raceId:number){
    console.log("raceId=",raceId);
    this.router.navigate([`./races/${raceId}`]);
  }
  
}
