import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string;
  password:string;
  constructor(private location: Location,private _snackBar: MatSnackBar,private fb:FormBuilder,private _router:Router,private userServiceService:UserServiceService) { }

  ngOnInit(): void {
    if(localStorage.getItem("userName")!=null)
    this._router.navigate(['']);
  }
  userLogin=this.fb.group({
    email:['',[
      Validators.required,
   Validators.email]],
   password:['',
   [Validators.required, Validators.minLength(8),Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")]]
 })

 forward(){
  if(this.userLogin.invalid){
   // return this.openSnackBar();
  }
  let emailId = this.userLogin.controls.email.value;
  let password = this.userLogin.controls.password.value;
  this.userServiceService.login(emailId,password).subscribe((data)=>{
    localStorage.setItem("userName",emailId);
    this.location.back();

  })

 }
 openSnackBar() {
  this._snackBar.open("enter valid email and password or register", "", {
    duration: 1000,
  });
}

}
