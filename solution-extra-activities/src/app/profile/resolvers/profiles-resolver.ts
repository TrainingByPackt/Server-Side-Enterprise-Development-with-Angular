import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Profile } from '../model/profile';
import { ProfileService } from '../services/profile.service';

@Injectable({ providedIn: 'root' })
export class ProfilesResolver implements Resolve<Profile[]> {
  constructor(private service: ProfileService) {}
  resolve() {
    return this.service.getProfiles();
  }
}
