import { UserServiceService } from './../user-service.service';
import { Post } from './../Post';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {
ourData:string;
  constructor(private userServiceService:UserServiceService) { }

  ngOnInit(): void {
  }
  addPost(){
    let date:Date=new Date();
    let time:string= ("0"+date.getHours()).slice(-2)+""+("0"+(date.getMinutes())).slice(-2)+""+("0"+date.getSeconds()).slice(-2);
    time=localStorage.getItem("userName")+time+date.getDate()+date.getMonth()+date.getFullYear();
    let post:Post=new Post("0.0","0.0",this.ourData,time)
    console.log(post);
    this.userServiceService.addPosts(post).subscribe((data)=>{
      console.log(typeof data,data);
      this.userServiceService.updatePost().subscribe((data)=>{
        console.log(data)
      });
    })
  }

}
