import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-linker',
  templateUrl: './linker.component.html',
  styleUrls: ['./linker.component.scss']
})
export class LinkerComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {

   
  }

  async connectToSignIn(){
    await new Promise(f => setTimeout(f, 500));
    this.router.navigate(['/sign-in']);
  }
  

}
/*
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
*/