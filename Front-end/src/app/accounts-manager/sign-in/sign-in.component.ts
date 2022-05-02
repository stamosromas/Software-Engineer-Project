import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import {carsPasswords} from '../../../assets/carsPasswords';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  username = new FormControl('');
  password=new FormControl('');


  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  show: boolean = false;


// click event function toggle
  

  async onSubmit(){
    let found=false;
    for(let i=0; i<carsPasswords.length; i++){
      if(carsPasswords[i]['user']===this.username.value)
        if(carsPasswords[i]['password']===this.password.value){
          console.log(carsPasswords[i].user,carsPasswords[i].password)
          found=true
          await new Promise(f => setTimeout(f, 500));
          
          this.router.navigate(['/home-page']);
        } 
    }
    if(found===false)
      alert('Invalid username of password!');
  }
  
  hasLength(){
    return this.password.value!=='';
  }

  help() {
    this.show = !this.show;
  }

  canSubmit(){
    if(this.username.value===''||this.password.value==='')
      return false;
    else
      return true;
  }
}


