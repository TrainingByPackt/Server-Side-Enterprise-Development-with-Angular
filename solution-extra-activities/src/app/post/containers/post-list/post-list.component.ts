import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, tap } from 'rxjs/operators';
import { Post } from '../../model/post';
import { UiService } from '../../../ui/services/ui.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  public posts: Post[];

  constructor(private route: ActivatedRoute, public ui: UiService) { }

  ngOnInit() {
    this.route.data
      .pipe(
        map(data => data['posts']),
        tap(posts => this.setMetaData(posts)),
      )
      .subscribe(
        res => this.posts = res,
        err => console.log('error', err),
      );
  }

  setMetaData(posts: Post[]) {
    const description = `Showing ${posts.length} posts`;
    const title = 'Post List';
    this.ui.setMetaData({ description, title });
  }

}
