import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-history-teams-list',
  templateUrl: './history-teams-list.component.html',
  styleUrls: ['./history-teams-list.component.css']
})
export class HistoryTeamsListComponent implements OnInit{

  @Input() teams: any = {};
  
  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {}

  openConstructor(constructorId:number){
    console.log("constructorId=",constructorId);
    this.router.navigate([`./teams/${constructorId}`]);
  }
  
}
