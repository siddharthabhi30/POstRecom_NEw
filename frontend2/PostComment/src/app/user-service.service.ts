import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Commentt } from './models/commentt';
import { Post } from './models/Post';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  baseUrl="http://localhost:9091/UserPost/user/";
  constructor(private http:HttpClient) { }

   getPosts():Observable<Post[]>{
    return this.http.get<Post[]>(this.baseUrl+"/viewPosts.do")

  }

  getComments(postId:string):Observable<Commentt[]>{
    return this.http.get<Commentt[]>(this.baseUrl+"/getComment/"+postId);
  }
  addPosts(post:Post){
    console.log("this is to be added  as a post   ",post)
   let  modelPost={"positive":"0.0","negative":"0.0","data":"values88888888","postId":"post23"}
   modelPost['data']=post.data
   modelPost['postId']=post.postId
    return this.http.post(this.baseUrl+"addPost.do/"+localStorage.getItem("userName"),post, {responseType: 'text'});

  }
  
 
  findPost(postId:string):Observable<Post>{
    return this.http.get<Post>(this.baseUrl+"/findPost/"+postId);
  }
  postComment(comment:Commentt){
    console.log("going commenbt  ",comment);
    let see={"commentId":"comment6","data":"first comment","title":"sid2"}
    console.log(see);
    console.log("break")
   
    console.log(comment,"this comemnt is being pposted");
    
    return this.http.post(this.baseUrl+"addComment.do/"+localStorage.getItem("currentPost"),comment,{responseType: 'text'});
  }

  login(userName:string,password:string){
    console.log(userName,password);
    return this.http.get(this.baseUrl+"/"+userName+"/"+password, {responseType: 'text'});
  }

  sendNotification(userName:string,data:string){
    
    return this.http.get(this.baseUrl+"sendMail/"+userName+"/"+data, {responseType: 'text'});
  }

  getMyPosts(emailId:string):Observable<Post[]>{
    return this.http.get<Post[]>(this.baseUrl+"/viewPostsByUser/"+emailId)

  }
  getMyComments(emailId:string):Observable<Commentt[]>{
    return this.http.get<Commentt[]>(this.baseUrl+"/getMyComment/"+emailId+"/nothing")

  }


}
