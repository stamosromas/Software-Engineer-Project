import { Component, OnInit } from '@angular/core';
import { carsPasswords } from 'src/assets/carsPasswords';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {  

  constructor() {

  }

  ngOnInit(): void {
    
  }

  partThatIsShowed=0;

  buttonCharts(){
    this.partThatIsShowed=1;
  }
  
  buttonReturnBack(){
    this.partThatIsShowed=0;
  }
  buttonReturnCharge(){
    this.partThatIsShowed=3;
  }

  tablesShow(){
    this.partThatIsShowed=2;
  }

  

}
