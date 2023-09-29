import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostComponent } from './post.component';
import { PostsComponent } from './posts/posts.component';
import { PostSingleComponent } from './post-single/post-single.component';


@NgModule({
  declarations: [
    PostComponent,
    PostsComponent,
    PostSingleComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule
  ]
})
export class PostModule { }
