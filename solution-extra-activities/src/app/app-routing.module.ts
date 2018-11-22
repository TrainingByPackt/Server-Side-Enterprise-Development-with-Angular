import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './ui/components/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/posts',
        pathMatch: 'full',
      },
      {
        path: 'posts',
        loadChildren: './post/post.module#PostModule',
      },
      {
        path: 'profiles',
        loadChildren: './profile/profile.module#ProfileModule',
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { initialNavigation: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
