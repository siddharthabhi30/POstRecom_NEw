import { PostCommentComponent } from './post-comment/post-comment.component';
import { NewPostComponent } from './new-post/new-post.component';
import { TimelineComponent } from './timeline/timeline.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  {path:'',component:TimelineComponent},
  {path:'newpost',component:NewPostComponent},
  {path:'comment',component:PostCommentComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent=[NewPostComponent,TimelineComponent]
