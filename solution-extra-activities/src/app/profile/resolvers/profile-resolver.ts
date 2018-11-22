import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Profile } from '../model/profile';
import { ProfileService } from '../services/profile.service';

@Injectable({ providedIn: 'root' })
export class ProfileResolver implements Resolve<Profile> {

  constructor(private service: ProfileService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.service.getProfile(route.paramMap.get('id'));
  }
}
