import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RoleService } from './role.service';
import { environment } from 'src/environments/environment';

const API_URL = environment.apiUrl + '/test/';

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
    return this.http.get(environment.apiUrl + '/users', { responseType: 'text' });
  }

  getRoles(): Observable<any> {
    return this.roleService.getRoles();
  }
}
