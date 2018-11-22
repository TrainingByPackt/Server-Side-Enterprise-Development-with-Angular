import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './containers/post-list/post-list.component';
import { PostDetailComponent } from './containers/post-detail/post-detail.component';
import { PostsResolver } from './resolvers/posts-resolver';
import { PostResolver } from './resolvers/post-resolver';

const routes: Routes = [
  {
    path: '',
    component: PostListComponent,
    resolve: {
      posts: PostsResolver,
    }
  },
  {
    path: ':id',
    component: PostDetailComponent,
    resolve: {
      post: PostResolver,
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
