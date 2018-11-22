import { Component, OnInit } from '@angular/core';
import { Profile } from '../../model/profile';
import { ActivatedRoute } from '@angular/router';
import { UiService } from '../../../ui/services/ui.service';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.css']
})
export class ProfileDetailComponent implements OnInit {
  public profile: Profile;

  constructor(private route: ActivatedRoute, private ui: UiService) { }

  ngOnInit() {
    this.route.data
      .pipe(
        map(data => data['profile']),
        tap(profile => this.setMetaData(profile))
      )
      .subscribe(
        res => this.profile = res,
        err => console.log('error', err),
      );
  }

  setMetaData(profile: Profile) {
    const description = `Profile of ${profile.fullName}`;
    const title = `Profile of ${profile.fullName}`;
    this.ui.setMetaData({ description, title });
  }

}
