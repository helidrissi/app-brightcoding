import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators} from '@angular/forms';
import {UserNameValidator} from './form.validator'

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  constructor() { }
  
  ngOnInit(): void {
  }

  form =new FormGroup({
    user:new FormControl('',[Validators.required,
    Validators.minLength(3),
    UserNameValidator.HamzaFct]),
    pass:new FormControl('',Validators.required)

   
  })

  get user(){

    return this.form.get('user')
  }
  get pass(){

    return this.form.get('pass')
  }
  


}
