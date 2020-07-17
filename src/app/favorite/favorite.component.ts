import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  @Input()isActif:boolean=true;
  @Output() change=new EventEmitter;
  constructor() { }

  ngOnInit(): void {
  }
  onClick(){
this.isActif=!this.isActif;
this.change.emit();

  }
}
