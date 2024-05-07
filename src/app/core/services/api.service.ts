import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl = "http://ergast.com/api/f1";
  responseFormat =".json";

  constructor(private http: HttpClient) { }

  // GET current driver standings
  getCurrentDriverStandings(): Observable<any> {
     return this.http.get(`${this.apiUrl}/current/driverStandings${this.responseFormat}`);
  }

  // GET current team standings
  getCurrentTeamStandings(): Observable<any> {
    return this.http.get(`${this.apiUrl}/current/constructorStandings${this.responseFormat}`);
  }

  // GET team info
  getTeamInfo(constructorId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/constructor/${constructorId}${this.responseFormat}`);
  }

  // GET current races
  getCurrentRaces():Observable<any> {
    return this.http.get(`${this.apiUrl}/current${this.responseFormat}`);
  }

  // GET driver info
  getDriverInfo(driverId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/drivers/${driverId}${this.responseFormat}`);
  }

  // GET driver results
  getDriverResults(season: string, driverId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/drivers/${driverId}/results${this.responseFormat}?limit=200`);
  }

  // GET seasons
  getSeassons(): Observable<any> {
    return this.http.get(`${this.apiUrl}/seasons${this.responseFormat}`);
  }

  //GET countries
  getCountries(): Observable<any> {
    return this.http.get('src/assets/countries.json');
  }

}
