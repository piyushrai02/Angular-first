import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validator, Validators } from "@angular/forms";

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  Contact:FormGroup;

  
 contact(){
  this.Contact = this.fb.group({
    name:['',[Validators.required,Validators.minLength(6)]],
    email:['',[Validators.required,Validators.email]],
    phone:['',[Validators.required,Validators.minLength(10)]]
    
  })

 }

  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.contact()
  }
get name(){
  return this.Contact.get('name')
}
get email(){
  return this.Contact.get('email')
}
get phone(){
  return this.Contact.get('phone')
}
}
