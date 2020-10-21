import { Post } from './../Post';
import { UserServiceService } from './../user-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit {
posts:Post[];
  constructor(private userServiceService:UserServiceService) {
    
   }

  ngOnInit(): void {
    this.userServiceService.getPosts().subscribe((data)=>{
      this.posts=data;
      console.log(this.posts);
    })
  }

}
