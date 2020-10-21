import { UserServiceService } from './../user-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
username:string;
password:string;
  constructor(private userServiceService:UserServiceService) { }

  ngOnInit(): void {
  }

  proceed(){
    this.userServiceService.login(this.username,this.password).subscribe((data)=>{
      console.log(typeof data,data);
    })
  }

}
