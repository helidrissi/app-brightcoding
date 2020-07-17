import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courses;
  isselected:true;

  fct(){
    return this.isselected;
  }
  Load(){

    this.courses=[{id:1,title:'Springboot'},{id:2,title:'Springdata'},{id:3,title:'docker'}]
  }
  
  AddCourse(){

   this.courses.push({id:4,title:'jenkins'});

  }

  trackByEmpCode(index,c){

    return c.id;
  }
  deleteCourse(c){

    let i=this.courses.indexOf(c);
    this.courses.splice(i,1);
  }
  updateCourse(c){

    
    c.title="UPDATED";
  }





 
  onClick($event){
      $event.stopPropagation();
    console.log('Clicked button',$event)
  }
  title = 'appangular';
  isActv=false;
}
