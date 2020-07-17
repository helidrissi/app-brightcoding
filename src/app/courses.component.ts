import {Component} from '@angular/core';
import {CoursesService} from './courses.service'


@Component({

selector: 'courses',
templateUrl:'./courses.component.html'

})

export class CoursesComponent {
   body="The Spring Framework is an application framework and inversion of control container for the Java platform. The framework's core features can be used by any Java application, but there are extensions for building web applications on top of the Java EE (Enterprise Edition) platform. Although the framework does not impose any specific programming model, it has become popular in the Java community as an addition to the Enterprise JavaBeans (EJB) model. The Spring Framework is open source.";
   title="La list De Tout Mes Cours Premuim";
   courses;

   constructor(coursesService:CoursesService){
     
     this.courses=coursesService.getCourses();
   }

   getTitle(){
   
return this.title;
   }

   
person={
   firstName:"hamza",
   lastName:"el idrissi dafali",
   salary:2200.66,
   birthday:new Date("1991,08,25")
}
}