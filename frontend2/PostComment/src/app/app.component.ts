import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Post } from './models/Post';
import { NewPostComponent } from './new-post/new-post.component';
import { UserServiceService } from './user-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PostComment';

  constructor(private _snackBar: MatSnackBar,private router:Router,private userServiceService:UserServiceService,public dialog:MatDialog) {
  }
  newPost(){
    if(localStorage.getItem("userName")==null){
      return this.openSnackBar();
    }
    let dialogRef=this.dialog.open(NewPostComponent,{
      height: '50%',
      width: '90%',
    });
    dialogRef.afterClosed().subscribe(result=>{
     let returning:string=result;
      //console.log("result",returning,typeof returning,returning==null);
      if(returning=="true"){
        if(localStorage.getItem("postData")==null) return;
        console.log(localStorage.getItem("postData"))
        let date:Date=new Date();
    let time:string= ("0"+date.getHours()).slice(-2)+""+("0"+(date.getMinutes())).slice(-2)+""+("0"+date.getSeconds()).slice(-2);
    time=localStorage.getItem("userName")+time+date.getDate()+date.getMonth()+date.getFullYear();
    let post:Post=new Post("0.0","0.0",localStorage.getItem("postData"),time)
    console.log(post);
    this.userServiceService.addPosts(post).subscribe((data)=>{
      console.log(typeof data,data);
      window.location.reload();
      
    })
       
   
      }
    })



  }
  openSnackBar() {
    this._snackBar.open("Please login to post", "", {
      duration: 1000,
    });
  }

  home(){
    this.router.navigate(['']);
  }

  login(){
    this.router.navigate(['login']);
  }
  }
