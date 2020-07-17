import { Component, OnInit } from '@angular/core';
import {FollowersServiceService} from '../followers-service.service'

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {
  
  follower={

   login:'',
   avatar_url:'',
   url:''

  }
  followers :any[]=[];


  constructor(private followersService:FollowersServiceService) { }

  ngOnInit(): void {
    this.getdata();
  }
  getdata(){
    this.followersService.getFollowers().subscribe(
       (data: any[])=>{
         this.followers=data;},
         (err)=>{
   
         alert("erreur innatendue");
         console.log(err);
   
         }
     )}
}
