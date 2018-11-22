import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileListComponent } from './containers/profile-list/profile-list.component';
import { ProfileDetailComponent } from './containers/profile-detail/profile-detail.component';
import { ProfileItemComponent } from './components/profile-item/profile-item.component';
import { ProfilePostComponent } from './components/profile-post/profile-post.component';

@NgModule({
  imports: [
    CommonModule,
    ProfileRoutingModule
  ],
  declarations: [ProfileListComponent, ProfileDetailComponent, ProfileItemComponent, ProfilePostComponent]
})
export class ProfileModule { }
