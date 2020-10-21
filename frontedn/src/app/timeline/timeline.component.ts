import { Post } from './../Post';
import { Component, OnInit } from '@angular/core';

import { UserServiceService } from '../user-service.service';
import { MatDialog } from '@angular/material/dialog';

import { NewPostComponent } from '../new-post/new-post.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {
  ourData:string;
  posts:Post[];

  constructor(private router:Router,private userServiceService:UserServiceService,public dialog:MatDialog) {
    
   }

  ngOnInit(): void {
    localStorage.setItem("userName","sid2")
    this.userServiceService.getPosts().subscribe((data)=>{
      this.posts=data;
      console.log(this.posts);
     
    })
  }
  newPost(){
    let dialogRef=this.dialog.open(NewPostComponent);
  }
  fu(post:Post){
    localStorage.setItem("currentPost",post.postId);
    this.router.navigate(['comment']);
  }
 
}
