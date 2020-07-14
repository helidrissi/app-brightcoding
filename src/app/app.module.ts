import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {CoursesComponent} from './courses.component';
import { CourseComponent } from './course/course.component'
import {CoursesService} from './courses.service'
import {EmailService} from './email.service'
import { FormsModule } from '@angular/forms';
import { RsmPipe } from './rsm.pipe';
import { FavoriteComponent } from './favorite/favorite.component';
import { InputFormatDirective } from './input-format.directive';
import { ContactFormatComponent } from './contact-format/contact-format.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { PostsComponent } from './posts/posts.component';
import { HttpClientModule  } from  "@angular/common/http";
import { PostService } from './services/post.service';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    RsmPipe,
    FavoriteComponent,
    InputFormatDirective,
    ContactFormatComponent,
    SignupFormComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule 
  ],
  providers: [CoursesService,EmailService,PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
