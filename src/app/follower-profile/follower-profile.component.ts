import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-follower-profile',
  templateUrl: './follower-profile.component.html',
  styleUrls: ['./follower-profile.component.css']
})
export class FollowerProfileComponent implements OnInit {
  id:number;
  user:string;
  var:string;
  type:string;
  page:number;
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.id=+this.route.snapshot.paramMap.get('id');
    this.user=this.route.snapshot.paramMap.get('xxx');
    this.type=this.route.snapshot.queryParamMap.get('type');
    this.page=+this.route.snapshot.queryParamMap.get('page');
    
    

  }

}
