import { Injectable } from '@angular/core';
import { HttpClient,HttpClientModule  } from '@angular/common/http';;

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private url="https://jsoccnplaceholder.typicode.com/posts"

  constructor(private http:HttpClient) { }

  getPosts(){

    return  this.http.get(this.url)
  }
  createPost(post){

    return  this.http.post(this.url,post)
  }
  updatePoste(post){

    return this.http.put(this.url+'/'+post.id,post)
  }

  deletePost(post){

    return this.http.delete(this.url+'/'+post.id)
  }
}
