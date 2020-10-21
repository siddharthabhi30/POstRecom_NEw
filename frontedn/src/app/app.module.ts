import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestingComponent } from './testing/testing.component';
import { UserServiceService } from './user-service.service';
import { HttpClientModule } from '@angular/common/http';
import { PostItemComponent } from './post-item/post-item.component';
import { TimelineComponent } from './timeline/timeline.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { MenuComponent } from './menu/menu.component';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatDialogModule} from '@angular/material/dialog';
import { NewPostComponent } from './new-post/new-post.component';
import { PostCommentComponent } from './post-comment/post-comment.component';

@NgModule({
  declarations: [
    AppComponent,
    TestingComponent,
    PostItemComponent,
    TimelineComponent,
    NavbarComponent,
    LoginComponent,
    MenuComponent,
    NewPostComponent,
    PostCommentComponent,
    routingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule,FormsModule, BrowserAnimationsModule
    ,MatButtonModule,MatIconModule,MatMenuModule,MatDialogModule
  ],
  providers: [UserServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
