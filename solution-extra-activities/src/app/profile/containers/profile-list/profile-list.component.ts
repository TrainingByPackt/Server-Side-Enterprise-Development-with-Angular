import { Component, OnInit } from '@angular/core';
import { Profile } from '../../model/profile';
import { ActivatedRoute } from '@angular/router';
import { UiService } from '../../../ui/services/ui.service';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.css']
})
export class ProfileListComponent implements OnInit {
  public profiles: Profile[];

  constructor(private route: ActivatedRoute, public ui: UiService) { }

  ngOnInit() {
    this.route.data
      .pipe(
        map(data => data['profiles']),
        tap(profiles => this.setMetaData(profiles)),
      )
      .subscribe(
        res => this.profiles = res,
        err => console.log('error', err),
      );
  }

  setMetaData(profiles: Profile[]) {
    const description = `Showing ${profiles.length} profiles`;
    const title = 'Profile List';
    this.ui.setMetaData({ description, title });
  }
}
