import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://s1.lansing.io:4200/api/role/';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  constructor(private http: HttpClient) { }

  getRoles(): Observable<any> {
      return this.http.get(API_URL, { responseType:'text' });
  }

}
