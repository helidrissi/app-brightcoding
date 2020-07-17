import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private rt:Router) { }

  ngOnInit(): void {
  }
  onClick(){

    this.rt.navigate(['followers',12,'hamzadaf'],{
      queryParams:{page:1965,var:'value',user:'devops'}
    })
  }
}
