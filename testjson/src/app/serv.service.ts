import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Commentt } from './models/Commentt';
import { Post } from './models/Post';

@Injectable({
  providedIn: 'root'
})
export class ServService {
  baseUrl="http://localhost:9091/UserPost/user/";
  constructor(private http:HttpClient) { }

  getPosts():Observable<Post[]>{
    return this.http.get<Post[]>(this.baseUrl+"/viewPosts.do")

  }
  getComments(postId:string):Observable<Commentt[]>{
    return this.http.get<Commentt[]>(this.baseUrl+"/getComment/"+postId);
  }
}
