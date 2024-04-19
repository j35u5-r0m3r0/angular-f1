import { Component, OnInit, Output } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import countries from 'src/assets/countries.json'

@Component({
  selector: 'app-schelude',
  templateUrl: './schelude.component.html',
  styleUrls: ['./schelude.component.css']
})
export class ScheludeComponent implements OnInit{

  races: any[] = [];
  @Output() upcomingRaces: any[] = [];
  @Output() pastRaces: any[] = [];
  @Output() countriesIso = new Map([
    ["Bahrain", "BH"],
    ["UK", "GB"],
    ["UAE", "AE"],
    ["Argentina", "AR"],
    ["Australia", "AU"],
    ["Austria", "AT"],
    ["Azerbaijan", "AZ"],
    ["Belgium", "BE"],
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
   ]);

  iso = countries.entries;

  constructor(private apiService: ApiService){}

  ngOnInit(): void {
    this.getCurrentRaces();
    console.log("countriesIso",this.countriesIso);
    console.log("countries",countries);
    console.log("countries[0]",countries[0]);   
  }

  getCurrentRaces(){
    this.apiService.getCurrentRaces().subscribe((resp:any) => {
      // recupera todas las carreras
      this.races = resp.MRData.RaceTable.Races;

      // Carga las siguientes carreras
      this.upcomingRaces = this.races.filter(item =>{
        let date = new Date(item.date);
        return date > new Date();
      });
      
      // Carga las carreras pasadas
      this.pastRaces = this.races.filter(item =>{
        let date = new Date(item.date);
        return date < new Date();
      });
      });
  }

}
