import { Injectable } from '@angular/core';
import { HttpClient,HttpClientModule  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FollowersServiceService {

  private url="https://api.github.com/users/IDBRAHIMDEV/followers"

  constructor(private http:HttpClient) { }

  getFollowers(){

    return  this.http.get(this.url)
  }
}
