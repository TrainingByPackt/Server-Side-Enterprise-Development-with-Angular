import { Component, Input, OnInit } from '@angular/core';
import { Profile } from '../../model/profile';

@Component({
  selector: 'app-profile-item',
  templateUrl: './profile-item.component.html',
  styleUrls: ['./profile-item.component.css']
})
export class ProfileItemComponent implements OnInit {
  @Input() public profile: Profile;

  constructor() { }

  ngOnInit() {
  }

}
