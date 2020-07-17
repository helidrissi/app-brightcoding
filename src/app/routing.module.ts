import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FollowersComponent } from './followers/followers.component';
import {HomePageComponent} from './home-page/home-page.component';
import {FollowerProfileComponent} from './follower-profile/follower-profile.component';
import {NotFoundComponent} from './not-found/not-found.component';
import { PostsComponent } from './posts/posts.component';


const routes: Routes = [ {
    path:"home",
    component:HomePageComponent
  },
  {
    path:"followers",
    component:FollowersComponent
  },
  {
    path:"followers/:id/:xxx",
    component:FollowerProfileComponent
  },
  {
    path:"posts",
    component:PostsComponent
  },
  {
    path:"**",
    component:NotFoundComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
