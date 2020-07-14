import { PostService } from './../services/post.service';
import { HttpClient,HttpClientModule  } from '@angular/common/http';;
import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  status=true;
  post={
   
    id:0,
    title:'',
    body:'',
    
 
   }
  posts :any[]=[];

  constructor(private postService:PostService) {

  
   }
   create(p){
    
   this.postService.createPost(p).subscribe( 
      (data: any[])=>{
        this.post.id=data.id;
        this.posts.unshift(this.post);

        this.post={
   
          id:0,
          title:'',
          body:'',
          
       
         }
      }
      
     
  )
  

   }


  ngOnInit(): void {
    this.getdata();
  }
  

  getdata(){
 this.postService.getPosts().subscribe(
    (data: any[])=>{
      this.posts=data;},
      (err)=>{

      alert("erreur innatendue");
      console.log(err);

      }
  )}
edit(p){

    this.post=p
    this.status=false;
  }
 update(){
    this.postService.updatePoste(this.post).subscribe( 
      response=>{
       
         this.status=true;

  })
}

delete(p){

  this.postService.deletePost(p).subscribe( 
      response=>{
       
      
        let index=this.posts.indexOf(p);
        this.posts.splice(index,1);

  })




}




}
