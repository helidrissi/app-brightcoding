import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators} from '@angular/forms'

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  constructor() { }

  form=new FormGroup({user:new FormControl('',Validators.required),pass:new FormControl('',Validators.required)})

  get user(){

    return this.form.get('user');
  }

  get pass(){

    return this.form.get('pass');
  }


  ngOnInit(): void {
  }

}
