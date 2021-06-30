import { Component, OnInit } from '@angular/core';
import { RoleService } from '../_services/role.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser: any;
  roles?: any[];

  constructor(private token: TokenStorageService, private roleService: RoleService) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    this.roleService.getRoles().subscribe(
      data => {
        this.roles = JSON.parse(data);
      },
      err => {
        console.log(err);
        this.roles = [];
      }
    )
  }
}
