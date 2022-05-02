import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-load',
  templateUrl: './load.component.html',
  styleUrls: ['./load.component.scss']
})
export class LoadComponent implements OnInit {
  
  amount=new FormControl('');

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  isNumber(value: string | number): boolean{
    return ((value != null) &&
            (value !== '') &&
            !isNaN(Number(value.toString())));
   }
  canSubmit(){
    if(this.amount.value===''||!this.isNumber(this.amount.value))
      return false;
    else 
      return true;
  }

  async onSubmit(){
    await new Promise(f => setTimeout(f, 500));
          
          this.router.navigate(['/pay-form']);
  }

  cardTransaction(){
    this.router.navigate(['/pay-form']);
  }

  
}
