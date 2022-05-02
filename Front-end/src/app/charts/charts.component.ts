import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import {carsTollsInfos} from '../../assets/carsTollsInfos';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {

  
  

  constructor() { 
    
  }

  ngOnInit(): void {
    
  }

  // chartType:ChartType="line";
  // chartLabels:Label[]=['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  // chartData:ChartDataSets[]=[
  //   {data:[85,72,78,75,77,85,72,78,75,88,90,70],label:'YES'},
  //   {data:[15,28,22,25,23,25,15,28,22,25,12,10],label:'NO'},
  //   {data:[100,100,100,100,100,100,100,100,100,100,100,100],label:'Neutral'}
  // ]

  minMax(ls:number[]){
    let min=3000
    let max=0
    for(let i=0; i<ls.length; i++){
      if(ls[i]>max)
        max=ls[i]
      if(ls[i]<min)
        min=ls[i]
    }
    return [min,max]
  }

  takeYears(){
    let years:number[];
    for(let i=0; i<carsTollsInfos.length; i++){
      var a:number=+carsTollsInfos[i]['licenseYear'];
      years.push(a);
    }
    return years;
  }

  takeSignUpsPerYear(){
    let allYears = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    for(let i=0; i<carsTollsInfos.length; i++){
      allYears[parseInt(carsTollsInfos[i]['licenseYear'])-2000]+=1; 
    }
    return allYears;
  }

  chartType:ChartType="line";
  chartLabels:Label[]=['2000','2001','2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017','2018','2019','2020','2021'];
  



  


  chartData:ChartDataSets[]=[
    {data:this.takeSignUpsPerYear(),label:'Sign-up per Year'}
  ]


  
  
 

}
