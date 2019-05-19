import {Component} from '@angular/core';
import {UserManagementService} from '../../_services/user-management.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {

  users: any[];

  constructor(private userManagementService: UserManagementService) {
    this.getUsers();
  }

  onUserAdd(user) {
    this.userManagementService.addUser(remapUser(user)).subscribe(() => {
      this.getUsers();
    });
  }

  onUserDelete(user) {
    this.userManagementService.deleteUser(user).subscribe(() => {
      this.getUsers();
    });
  }

  onUserEdit(user) {
    this.userManagementService.updateUser(user).subscribe(() => {
      this.getUsers();
    });
  }

  getUsers() {
    this.userManagementService.getUsers().subscribe(users => {
      this.users = users;
    });
  }
}

function remapUser(user) {
  return {name: user.name, surname: user.surname,
    password: user.password, username: user.email};
}

