import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  email= new FormControl('');

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  emailValidation(email:string){
    let isValid:boolean=true;
    let parts=email.split('@');
    if(parts.length!=2)
      isValid=false;
    let arr=parts[1].split('.');
    if(arr.length!=2)
      isValid=false
    else{
      if(arr[0].length==0||arr[1].length==0)
        isValid=false;
    }
    return isValid;
  }

  onSubmit(){
    
    if(!this.emailValidation(this.email.value))
      alert('Not valid email account,please try again!');
    else{
      alert('Your request is accepted!');
      this.router.navigate(['/main']);
    }
  }

  

    
  
}
