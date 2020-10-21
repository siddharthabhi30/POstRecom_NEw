import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {
  postData:string="";
  constructor() { }

  ngOnInit(): void {
   
  }
  fu(){
    console.log('out internal function')
   localStorage.removeItem("postData");

   if(this.postData.length==0) {
    console.log("good happened")
    return;

   }
    localStorage.setItem("postData",this.postData);


  }


}
