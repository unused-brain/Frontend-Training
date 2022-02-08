import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../User';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent{

  @Input() users: User[];

  constructor() {
    this.users = [];
  }

}
