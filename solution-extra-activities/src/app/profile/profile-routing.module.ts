import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileListComponent } from './containers/profile-list/profile-list.component';
import { ProfileDetailComponent } from './containers/profile-detail/profile-detail.component';
import { ProfilesResolver } from './resolvers/profiles-resolver';
import { ProfileResolver } from './resolvers/profile-resolver';

const routes: Routes = [
  {
    path: '',
    component: ProfileListComponent,
    resolve: {
      profiles: ProfilesResolver,
    }
  },
  {
    path: ':id',
    component: ProfileDetailComponent,
    resolve: {
      profile: ProfileResolver,
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
