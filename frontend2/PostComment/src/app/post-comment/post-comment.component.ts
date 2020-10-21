import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Commentt } from '../models/commentt';
import { Post } from '../models/Post';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-post-comment',
  templateUrl: './post-comment.component.html',
  styleUrls: ['./post-comment.component.css']
})
export class PostCommentComponent implements OnInit {
  post:Post;
  @ViewChild('divToScroll') divToScroll: ElementRef;
  myComment:string;
 comments:Commentt[];
 isDataLoaded1=false;
 isDataLoaded2=false;
  constructor(private _snackBar: MatSnackBar,private userServiceService:UserServiceService) { }

  ngOnInit(): void {
    
    this.getAllData();
    
  }

  getAllData(){
    this.userServiceService.findPost(localStorage.getItem("currentPost")).subscribe((data)=>{
      this.post=data;
      console.log(this.post,"our post",typeof this.post);
      console.log(this.post.data)
      this.isDataLoaded1=true;
     
    })
    this.userServiceService.getComments(localStorage.getItem("currentPost")).subscribe((data)=>{
      this.comments=data;
      this.isDataLoaded2=true;
     })

  }

  postComment(){
    
    if(localStorage.getItem("userName")==null){
      return this.openSnackBar();
    }
   
    let date:Date=new Date();
    let time:string= ("0"+date.getHours()).slice(-2)+""+("0"+(date.getMinutes())).slice(-2)+""+("0"+date.getSeconds()).slice(-2);
    let comment:Commentt=new Commentt(localStorage.getItem("userName")+time+date.getDate()+date.getMonth()+date.getFullYear(),this.myComment,localStorage.getItem("userName"));
    this.userServiceService.postComment(comment).subscribe((data)=>{
      if(data=="hello")
     this.comments.push(comment);
      if(this.post.user.userName!=localStorage.getItem('userName')){
        console.log("some mnotyi")
        this.divToScroll.nativeElement.scrollTop=1000000; 
        localStorage.setItem("one","one");
        // this.userServiceService.sendNotification("siddharthabhi300@live.com","your recent post  '" +this.post.data.substring(0,40)+"'  got some comments").subscribe((data)=>{
        //   console.log(data,"is thios");
        //   this.divToScroll.nativeElement.scrollTop=2000;
        // });
      }

    })
    this.myComment="";
  }
  openSnackBar() {
    this._snackBar.open("Please login to post comment", "", {
      duration: 1000,
    });
  }

  
}




