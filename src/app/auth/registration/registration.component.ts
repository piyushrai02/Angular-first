import { Component, OnInit } from '@angular/core';
import { FormControl,FormBuilder,Validator,FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { MustMatch } from '../_helper/must-match.validator';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  Employee:FormGroup;
  submitted:boolean=false;
  userData:any
  userPass:any
 
// name=new FormControl('')
  // Employee = new FormGroup({
  //   firstName: new FormControl(''),
  //   lastName: new FormControl(''),
  //   email: new FormControl(''),
  //   phone: new FormControl(''),
  //   address:new FormGroup({
  //     state:new FormControl(''),
  //     city: new FormControl(''),
  //     pinCode: new FormControl(''),
  //   }),
  // });
  employee(){
  this.Employee = this.fb.group({
    firstName:['',[Validators.required,Validators.minLength(6)]],
    lastName:['',[Validators.required,Validators.minLength(6)]],
    email:['',Validators.email],
    phone:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
    password:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
    confirmPassword:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
    address:this.fb.group({
      state:['',Validators.required],
      city:['',Validators.required],
      pinCode:['',[Validators.required,Validators.minLength(6),Validators.maxLength(6)]],

    }),
  },
  {
    validator: MustMatch('password', 'confirmPassword')
});}
  constructor(private fb:FormBuilder,private router:Router) { }


  

  ngOnInit() {
    this.employee()
  }

  get firstName(){
    return this.Employee.get('firstName')
  }
  get lastName(){
    return this.Employee.get('lastName')
  }
  get email(){
    return this.Employee.get('email')
  }
  get phone(){
    return this.Employee.get('phone')
  }
  get state(){
    return this.Employee.get('address.state')
  }
  get city(){
    return this.Employee.get('address.city')
  }
  get pinCode(){
    return this.Employee.get('address.pinCode')
  }
  get password(){
    return this.Employee.get('address.password')
  }
  get confirmPassword(){
    return this.Employee.get('address.confirmPassword')
  }
  get f() { return this.Employee.controls; }

   onSubmit() {
       this.submitted = true;

        //stop here if form is invalid
       if (this.Employee.invalid) {
           return;
       }

       alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.Employee.value))
   }

 onSubmit1(){
   console.log(this.Employee.value)
   this.submitted = true;
   if (!this.Employee.valid) {
     let pass = this.Employee.controls.password.value;
     let cpass = this.Employee.controls.confirmPassword.value;
     if (pass == cpass){
       console.log("matched")
      
     this.userData = this.Employee.controls.email.value 
     this.userPass = this.Employee.controls.password.value 
     localStorage.setItem('user', JSON.stringify({
       userName: this.userData,
       password: this.userPass
     }));
  this.router.navigate(['/register/login']);
  
      
     }
     else {
       console.log("not true rertet");
     }
   } else {
     console.log("not true");
   }
 }
}

