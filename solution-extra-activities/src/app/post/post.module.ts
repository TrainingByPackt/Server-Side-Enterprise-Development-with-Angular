import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostListComponent } from './containers/post-list/post-list.component';
import { PostDetailComponent } from './containers/post-detail/post-detail.component';
import { PostItemComponent } from './components/post-item/post-item.component';
import { PostProfileComponent } from './components/post-profile/post-profile.component';

@NgModule({
  imports: [
    CommonModule,
    PostRoutingModule
  ],
  declarations: [PostListComponent, PostDetailComponent, PostItemComponent, PostProfileComponent]
})
export class PostModule { }
