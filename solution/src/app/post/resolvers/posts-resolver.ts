import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Post } from '../model/post';
import { PostService } from '../services/post.service';

@Injectable({ providedIn: 'root' })
export class PostsResolver implements Resolve<Post[]> {
    constructor(private service: PostService) {}
    resolve() {
        return this.service.getPosts();
    }
}
