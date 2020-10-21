import { state } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '../models/Post';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-my-post',
  templateUrl: './my-post.component.html',
  styleUrls: ['./my-post.component.css']
})
export class MyPostComponent implements OnInit {
  posts:Post[];
  constructor(private router:Router,private userServiceService:UserServiceService) { }

  ngOnInit(): void {
    setTimeout(() => 
    {
      this.scroll();
    },
    300)
    this.userServiceService.getMyPosts(localStorage.getItem('userName')).subscribe((data)=>{
      this.posts=data;
      console.log(this.posts);
     
    })
    console.log(state.toString())
   
  }
  scroll(){
    if(localStorage.getItem("currentView")==null){
      return ;  
    }
    window.scroll(0,parseInt(localStorage.getItem("currrentView")));
    console.log(window.pageYOffset);

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
