import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: '',
  redirectTo: 'post/',
  pathMatch: 'full'
},
{
  path: 'post',
  loadChildren: () => import('./post/post.module').then(m => m.PostModule)
},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
