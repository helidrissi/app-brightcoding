import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Onkey(name){

    return name.value;
  }
  onClick($event){
      $event.stopPropagation();
    console.log('Clicked button',$event)
  }
  title = 'appangular';
  isActv=false;
}
