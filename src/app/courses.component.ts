import {Component} from '@angular/core';
import {CoursesService} from './courses.service'


@Component({

selector: 'courses',
templateUrl:'./courses.component.html'

})

export class CoursesComponent {

   title="La list De Tout Mes Cours Premuim";
   courses;

   constructor(coursesService:CoursesService){
     
     this.courses=coursesService.getCourses();
   }

   getTitle(){
   
return this.title;
   }

}