import { Injectable } from '@angular/core';

export class CoursesService {


    getCourses():string[]{

        return ['Spring Boot','Spring Data','Hibernate','Vuejs','Angular','Docker'];
    }



}