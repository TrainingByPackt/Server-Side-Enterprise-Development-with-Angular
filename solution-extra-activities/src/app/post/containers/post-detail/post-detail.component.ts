import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, tap } from 'rxjs/operators';
import { PostService } from '../../services/post.service';
import { Post } from '../../model/post';
import { UiService } from '../../../ui/services/ui.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  public post: Post;

  constructor(private route: ActivatedRoute, private ui: UiService) { }

  ngOnInit() {
    this.route.data
      .pipe(
        map(data => data['post']),
        tap(post => this.setMetaData(post))
      )
      .subscribe(
        res => this.post = res,
        err => console.log('error', err),
      );
  }

  setMetaData(post: Post) {
    const { date, profile, text } = post;
    const description = `${text} by ${profile.fullName}`;
    const title = `Post by ${profile.fullName} at ${date}`;
    this.ui.setMetaData({ description, title });
  }

}
