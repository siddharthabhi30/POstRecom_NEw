import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimelineComponent } from './timeline/timeline.component';
import { PostItemComponent } from './post-item/post-item.component';
import { UserServiceService } from './user-service.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';

import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewPostComponent } from './new-post/new-post.component';
import {MatInputModule} from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';
import { PostCommentComponent } from './post-comment/post-comment.component';
import { LoginComponent } from './login/login.component';

import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MyCommentComponent } from './my-comment/my-comment.component';
import { MyPostComponent } from './my-post/my-post.component';





@NgModule({
  declarations: [
    AppComponent,
    TimelineComponent,
    PostItemComponent,
    NewPostComponent,
    PostCommentComponent,routingComponent, LoginComponent, MyCommentComponent, MyPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,ReactiveFormsModule,
    BrowserAnimationsModule,HttpClientModule,
    FormsModule,MatButtonModule,MatIconModule,MatMenuModule,MatDialogModule,
    MatInputModule,MatDividerModule,MatSnackBarModule
  ],
  providers: [UserServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
