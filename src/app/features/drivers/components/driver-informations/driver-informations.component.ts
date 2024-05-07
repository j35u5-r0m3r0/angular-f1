import { Component, Input } from '@angular/core';
import { Driver } from '../../interfaces/driverInfoResp.interface';

@Component({
  selector: 'app-driver-informations',
  templateUrl: './driver-informations.component.html',
  styleUrls: ['./driver-informations.component.css']
})
export class DriverInformationsComponent {

  @Input()
  info!: Driver;

  getAge(dob:Date): number {
    let age:number = 0;
    if (dob) {
      //convert date again to type Date
      const bdate = new Date(dob);
      const timeDiff = Math.abs(Date.now() - bdate.getTime() );
      age = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
    }
    return age;
  }
}
