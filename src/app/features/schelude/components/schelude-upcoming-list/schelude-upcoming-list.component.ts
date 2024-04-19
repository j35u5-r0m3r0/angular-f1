import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-schelude-upcoming-list',
  templateUrl: './schelude-upcoming-list.component.html',
  styleUrls: ['./schelude-upcoming-list.component.css']
})
export class ScheludeUpcomingListComponent implements OnInit{
  
  @Input() races: any[] = [];
  @Input() countries = new Map();
  
  /* countryIso = new Map([
  ["Bahrain", "BH"],
  ["UK", "GB"],
  ["UAE", "AE"],
  ["Argentina", "AR"],
  ["Australia", "AU"],
  ["Austria", "AT"],
  ["Azerbaijan", "AZ"],
  ["S", "BE"],
  ["Brazil", "BR"],
  ["United States", "US"],
  ["USA", "US"],
  ["Canada", "CA"],
  ["China", "CN"],
  ["Netherlands", "NL"],
  ["Germany", "DE"],
  ["Italy", "IT"],
  ["Spain", "ES"],
  ["France", "FR"],
  ["Hungary", "HU"],
  ["India", "IN"],
  ["Japan", "JP"],
  ["Korea", "KR"],
  ["Malaysia", "MY"],
  ["Mexico", "MX"],
  ["Monaco", "MC"],
  ["Morocco", "MA"],
  ["Portugal", "PT"],
  ["Qatar", "QA"],
  ["Russia", "RU"],
  ["Saudi Arabia", "SA"],
  ["Singapore", "SG"],
  ["South Africa", "ZA"],
  ["Sweden", "SE"],
  ["Switzerland", "CH"],
  ["Turkey", "TR"],
 ]); */

  constructor() {}

  ngOnInit(): void {}

}
