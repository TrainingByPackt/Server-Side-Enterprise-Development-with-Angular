import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Post } from '../model/post';

const baseUrl = `${environment.apiUrl}/posts/`;
const defaultParams = 'filter[include]=profile';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  public getPosts(): Observable<Post[]> {
    const params = `?${defaultParams}&filter[where][type]=text&filter[limit]=20`;
    return this.http.get<Post[]>(baseUrl + params);
  }

  public getPost(id: string): Observable<Post> {
    const params = `?${defaultParams}`;
    return this.http.get<Post>(baseUrl + id + params);
  }
}
