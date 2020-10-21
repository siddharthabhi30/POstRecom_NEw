import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MyCommentComponent } from './my-comment/my-comment.component';
import { MyPostComponent } from './my-post/my-post.component';
import { NewPostComponent } from './new-post/new-post.component';
import { PostCommentComponent } from './post-comment/post-comment.component';
import { TimelineComponent } from './timeline/timeline.component';

const routes: Routes = [
  {path:'',component:TimelineComponent},
  {path:'newpost',component:NewPostComponent},
  {path:'comment',component:PostCommentComponent},
  {path:'login',component:LoginComponent},
  {path:'mypost',component:MyPostComponent},
  {path:'mycomment',component:MyCommentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent=[LoginComponent,MyCommentComponent,NewPostComponent,TimelineComponent,MyPostComponent]
