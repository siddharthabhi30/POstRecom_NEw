import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Commentt } from '../models/commentt';
import { Post } from '../models/Post';
import { NewPostComponent } from '../new-post/new-post.component';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {
  ourData:string;
  posts:Post[];
  comments:Commentt[];
  constructor(private router:Router,private userServiceService:UserServiceService,public dialog:MatDialog) {
    
   }

  ngOnInit(): void {
    setTimeout(() => 
    {
      this.scroll();
    },
    300)
    
    this.userServiceService.getPosts().subscribe((data)=>{
      this.posts=data;
      console.log(this.posts);
     
    })
   
    
  }

  scroll(){
    window.scroll(0,parseInt(localStorage.getItem("currrentView")));
    console.log(window.pageYOffset);

  }
 scroll2(){
  console.log(typeof window.pageYOffset);
 }
  fu(post:Post){
    let view:string=window.pageYOffset.toString();
    console.log(view,"view");
    localStorage.setItem("currrentView",view)
    console.log(localStorage.getItem("currrentView"),window.pageYOffset)
    localStorage.setItem("currentPost",post.postId);
    this.router.navigate(['comment']);
  }

}
