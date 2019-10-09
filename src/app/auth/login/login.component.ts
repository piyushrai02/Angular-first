import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,FormControl,Validator, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // // form:FormGroup;
  // username = new FormControl('')       this is for single Form control 
  // password = new FormControl('')

 login:FormGroup;
 message:any;
 errorMessage:any
 
 
  constructor(private fb:FormBuilder,private router:Router) { }

  ngOnInit() {
    this.elogin()
  }
  elogin(){
    this.login = this.fb.group({
      username:['',[Validators.required,Validators.email]],
      password:['',Validators.required]
    })
  }
  get a(){
    return this.login.controls
  }
  get username(){
    return this.login.get('username')
  }
  get password(){
    return this.login.get('password')
  }
  onSubmit(){

    if(this.login.valid){
     let uname = this.login.controls.username.value
     let pass = this.login.controls.password.value
     let user = JSON.parse( localStorage.getItem('user'));
     if(uname==user.userName && pass==user.password){
       this.router.navigate(['/course'])
     }
     else{
       this.errorMessage = "User name or password is not correct"
     }
     
    }
    else{
      if(!this.login.valid){
        this.errorMessage="please fill a correct User Name"
      }
      else{
        this.errorMessage="please fill a correct password"
      }
       
    }
    
  }

}
