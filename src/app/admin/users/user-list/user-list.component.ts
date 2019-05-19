import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {

  private _users: any[] = [];

  @Input() set users(value: any[]) {
    this._users = value;
    this.loading = false;
  }

  get users(): any[] {
    return this._users;
  }

  @Output()
  deleteUser = new EventEmitter<any>();

  @Output()
  editUser = new EventEmitter<any>();

  loading = false;

  constructor() {}

  onUserEdit(newRole, user: any) {
    this.editUser.emit({
      ...user,
      roles: [newRole]
    });
  }

  onUserDelete(user: any) {
    this.deleteUser.emit(user);
  }

}
