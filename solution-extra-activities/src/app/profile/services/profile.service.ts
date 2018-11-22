import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Profile } from '../model/profile';

const baseUrl = `${environment.apiUrl}/profiles/`;
const defaultParams = 'filter[include]=posts';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  public getProfiles(): Observable<Profile[]> {
    const params = `?${defaultParams}`;
    return this.http.get<Profile[]>(baseUrl + params);
  }

  public getProfile(id: string): Observable<Profile> {
    const params = `?${defaultParams}`;
    return this.http.get<Profile>(baseUrl + id + params);
  }
}
