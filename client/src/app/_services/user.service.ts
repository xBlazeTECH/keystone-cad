import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RoleService } from './role.service';

const API_URL = 'http://s1.lansing.io:4200/api/test/';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient, private roleService: RoleService) { }

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', { responseType: 'text' });
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'mod', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }

  getUserRoles(): Observable<any> {
    return this.http.get(API_URL + 'roles', { responseType: 'text' });
  }

  getUsers(): Observable<any> {
    return this.http.get('http://s1.lansing.io:4200/api/users', { responseType: 'text' });
  }

  getRoles(): Observable<any> {
    return this.roleService.getRoles();
  }
}
