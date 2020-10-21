import { Comment } from './../models/comment';
import { Post } from './../Post';
import { UserServiceService } from './../user-service.service';
import { Component, OnInit } from '@angular/core';
import { Commentt } from '../models/commentt';

@Component({
  selector: 'app-post-comment',
  templateUrl: './post-comment.component.html',
  styleUrls: ['./post-comment.component.css']
})
export class PostCommentComponent implements OnInit {
  post:Post;
  myComment:string;
 comments:Commentt[];
  constructor(private userServiceService:UserServiceService) {

   }

  ngOnInit(): void {
    this.userServiceService.findPost(localStorage.getItem("currentPost")).subscribe((data)=>{
      this.post=data;
      console.log(this.post,"our post")
      
    })
    this.userServiceService.getComments(localStorage.getItem("currentPost")).subscribe((data)=>{
     this.comments=data;
    })
  }
  postComment(){
    let date:Date=new Date();
    let time:string= ("0"+date.getHours()).slice(-2)+""+("0"+(date.getMinutes())).slice(-2)+""+("0"+date.getSeconds()).slice(-2);
    let comment:Comment=new Comment(localStorage.getItem("userName")+time+date.getDate()+date.getMonth()+date.getFullYear(),this.myComment,"sid2");
    this.userServiceService.postComment(comment).subscribe((data)=>{
      if(data=="hello")
      this.comments.push(comment);
    })

  }

}
