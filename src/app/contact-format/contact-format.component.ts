import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-format',
  templateUrl: './contact-format.component.html',
  styleUrls: ['./contact-format.component.css']
})
export class ContactFormatComponent implements OnInit {


  mc=[{id:1,name:"email"},{id:2,name:"phone"}]


  constructor() { }
  show(firstname){

    console.log(firstname);
  }


  submit(f){
    console.log(f.value.contact.firstname)
  }
  ngOnInit(): void {
  }

}
