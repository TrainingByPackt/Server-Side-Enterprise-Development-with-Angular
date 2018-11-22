import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../../../post/model/post';

@Component({
  selector: 'app-profile-post',
  templateUrl: './profile-post.component.html',
  styleUrls: ['./profile-post.component.css']
})
export class ProfilePostComponent implements OnInit {
  @Input() public posts: Post[];
  constructor() { }

  ngOnInit() {
  }

}
