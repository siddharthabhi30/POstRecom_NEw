import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Commentt } from '../models/commentt';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-my-comment',
  templateUrl: './my-comment.component.html',
  styleUrls: ['./my-comment.component.css']
})
export class MyCommentComponent implements OnInit {
 comments:Commentt[];
 isData=false;
  constructor(private router:Router,private userServiceService:UserServiceService) { }

  ngOnInit(): void {

    this.userServiceService.getMyComments(localStorage.getItem("userName")).subscribe((data)=>{
      this.comments=data;
      this.isData=true;
      console.log(this.comments);
     
    })
  }

}
