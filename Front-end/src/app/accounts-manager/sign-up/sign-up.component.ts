import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { carsPasswords } from 'src/assets/carsPasswords';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {



  username=new FormControl('');
  email=new FormControl('');
  password=new FormControl('');
  repeatPassword=new FormControl('');
  tollCompany=new FormControl('');
  agreement=new FormControl(false);


  constructor(private router: Router) { }

  ngOnInit(): void {

    

  }
  registration=carsPasswords;

  nameExist(name:string){
    for(let i=0; i<this.registration.length; i++)
      if(this.registration[i].user===name)
        return true;
    return false;
  }

  isEmpty(){
    if(this.username.value===''||this.password.value===''||this.repeatPassword.value===''||this.tollCompany.value==='')
      return true;
    else 
      return false;
  }

  passwordSame(){
    if(this.repeatPassword.value===this.password.value)
      return true;
    else
      return false;
  }
  
  async onSubmit(){
    if(!this.validEmail())
      alert('Not valid email...')
    else{

    if(!this.passwordSame()){
      alert('Passwords do not match,please try again.')
    }
    else{
      if(this.nameExist(this.username.value))
        alert('Username '+this.username.value+' already exists. Please select an other one');
      else{
        alert('New user successfully submited !')
        await new Promise(f => setTimeout(f, 500));
        
        
        this.router.navigate(['/home-page']);
        }
      }
    }

    // this.a.push({'username':this.username.value,'password':this.password.value,'tollCompany':this.tollCompany.value})
    // for(let i=0; i<registrations.length; i++)
    //   console.log(this.a[i].username,this.a[i].password,this.a[i].tollCompany);
  }

  onCancel(){
    this.username.reset();
    this.password.reset();
    this.repeatPassword.reset();
    this.tollCompany.reset();
  }

  showMessage(){
    if(this.isEmpty())
      return 'All fiels should be filled';
    else  
      return '';
  }

  canSubmit(){
    if(this.username.value===''||this.email.value===''||this.password.value===''||this.repeatPassword.value===''||this.agreement.value===false)
      return false;
    else
      return true;
  }

  validEmail(){
    let splitted=this.email.value.split('@');
    if(splitted.length!==2)
      return false;
    else{
      if(splitted[1].split('.').length===2)
        return true;
      else  
        return false;
    }

  }

}
