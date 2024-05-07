import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-driver-results',
  templateUrl: './driver-results.component.html',
  styleUrls: ['./driver-results.component.css']
})
export class DriverResultsComponent {

  @Input()
  results!: any[];

  filteredResults!: any[];
  seasons!: string[];

  constructor() {}

  ngOnChanges(): void {
    //this.filteredResults = this.results;
    this.seasons = this.getSeasons();
    this.filterResults(this.seasons[0]);
  }


  filterResults(text: string) {
    if(!text) {
      this.filteredResults = this.results;
      return;
    }
    this.filteredResults = this.results.filter(
      result => result?.season.toLowerCase().includes(text.toLowerCase())
    );
  }

  getSeasons(): string[] {
    const valoresSeason = this.results.map(result => result.season)
    const seasons = valoresSeason.sort((a,b) => b - a);
    return [...new Set(seasons)];
  }

}
