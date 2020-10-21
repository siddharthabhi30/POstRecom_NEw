import { Comment } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Commentt } from '../models/Commentt';
import { Post } from '../models/Post';
import { ServService } from '../serv.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
 
  comments2:Commentt[];
  posts:Post[];
  constructor(private userServiceService:ServService) { }

  ngOnInit(): void {
    this.userServiceService.getPosts().subscribe((data)=>{
      this.posts=data;
      console.log(this.posts,"our post")
      
    })
    this.userServiceService.getComments("sid21721011692020").subscribe((data)=>{
     this.comments2=data;
     console.log(this.comments2);
    })
  }

}
