import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { PostSingleComponent } from './post-single/post-single.component';


const routes: Routes = [ 
  {
  path: '', component: PostsComponent,
  
  children: [
      {
          path: 'post-single', component: PostSingleComponent,
          // canActivate: [LoginInGuard]
          
      }

  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
