import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.css']
})
export class BoardAdminComponent implements OnInit {
  loading: boolean = true;
  content: string = 'Loading...';
  users?: any[];
  roles?: any[];
  view: string = 'users';

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAdminBoard().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
    this.userService.getRoles().subscribe(
      data => {
        this.roles = JSON.parse(data);
      },
      err => {
        this.content = JSON.parse(err);
      }
    )
    this.userService.getUsers().subscribe(
      data => {
        console.log(data);
        this.users = JSON.parse(data);
        this.users?.forEach((val) => {
          val.rolenames = [];
          val.roles?.forEach((role: any) => {
            this.roles?.forEach((rol: any) => {
              console.log("Comparing " + role + " to " + rol._id + " as " + rol.name);
              if (role === rol._id) val.rolenames.push(rol.name);
            });
          });
          console.log(val);
        });
        this.loading = false;
      },
      err => {
        console.log(err);
      }
    )
  }

  setView(view: string) {
    this.view = view;
  }

  isView(view: string) {
    return this.view === view;
  }
}
