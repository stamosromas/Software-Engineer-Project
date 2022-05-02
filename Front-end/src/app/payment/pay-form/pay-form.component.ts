import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pay-form',
  templateUrl: './pay-form.component.html',
  styleUrls: ['./pay-form.component.scss']
})
export class PayFormComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  changeRoute(){
    alert('transaction ok!')
    this.router.navigate(['./home-page']);
  }

  onPay(){
    alert('Transaction completed!');
    this.router.navigate(['./home-page']);
  }

}
