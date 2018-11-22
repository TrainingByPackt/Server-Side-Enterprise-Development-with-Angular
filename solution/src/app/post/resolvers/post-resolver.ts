import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Post } from '../model/post';
import { PostService } from '../services/post.service';

@Injectable({ providedIn: 'root' })
export class PostResolver implements Resolve<Post> {

    constructor(private service: PostService) {}

    resolve(route: ActivatedRouteSnapshot) {
        return this.service.getPost(route.paramMap.get('id'));
    }
}
