import { Comment } from './models/comment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from './Post';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Commentt } from './models/commentt';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  baseUrl="http://localhost:9091/UserPost/user/";
  constructor(private http:HttpClient) { }

   getPosts():Observable<Post[]>{
    return this.http.get<Post[]>(this.baseUrl+"/viewPosts.do")

  }

  addPosts(post:Post){
    console.log("this is to be added  as a post   ",post)
   let  modelPost={"positive":"0.0","negative":"0.0","data":"values88888888","postId":"post23"}
   modelPost['data']=post.data
   modelPost['postId']=post.postId
    return this.http.post(this.baseUrl+"addPost.do/"+localStorage.getItem("userName"),post, {responseType: 'text'});

  }

  updatePost(){
    return this.http.get("http://127.0.0.1:5000/");
  }

  login(userName:string,password:string){
    console.log(userName,password);
    return this.http.get(this.baseUrl+"/"+userName+"/"+password, {responseType: 'text'});
  }

  getComments(postId:string):Observable<Commentt[]>{
    return this.http.get<Commentt[]>(this.baseUrl+"/getComment/"+postId);
  }
  findPost(postId:string):Observable<Post>{
    return this.http.get<Post>(this.baseUrl+"/findPost/"+postId);
  }
  postComment(comment:Commentt){
    console.log("going commenbt  ",comment);
    let see={"commentId":"comment6","data":"first comment","title":"sid2"}
    console.log(see);
    console.log("break")
   
    console.log(see);
    return this.http.post(this.baseUrl+"addComment.do/"+localStorage.getItem("currentPost"),comment,{responseType: 'text'});
  }


}
