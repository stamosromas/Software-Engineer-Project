import { Component, OnInit } from '@angular/core';
import {stations} from '../../../assets/stations';
import {carsTollsInfos} from '../../../assets/carsTollsInfos';

@Component({
  selector: 'app-show-data',
  templateUrl: './show-data.component.html',
  styleUrls: ['./show-data.component.scss']
})
export class ShowDataComponent implements OnInit {

  canShow:boolean;

  a=carsTollsInfos
  fun(){
    console.log(stations)
  }

  constructor(){
    this.canShow=false;
  }
  
  changeValue(){
    this.canShow=!this.canShow;
  }

  ngOnInit(): void {
  }

  showData(num:number){
    alert('VehicleId'+' : '+this.a[num]['vehicleID']+'\ntagId : '+this.a[num]['tagID']+'\ntagProvider : '+this.a[num]['tagProvider']+'\nproviderAbbr : '+this.a[num]['providerAbbr']+'\nlicenseYear : '+this.a[num]['licenseYear']);

  }

}

// <td>{{ elem["vehicleID"] }}</td>
//       <td>{{ elem["tagID"] }}</td>
//       <td>{{ elem["tagProvider"] }}</td>
//       <td>{{ elem["providerAbbr"] }}</td>
//       <td>{{ elem["licenseYear"] }}</td>