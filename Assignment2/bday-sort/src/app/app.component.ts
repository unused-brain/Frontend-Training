import { Component, Input, OnInit, Output } from '@angular/core';
import { UserService } from './user.service';
import { User } from './User';
import { SortingService } from './sorting.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'bday-sort';

  users: User[] = [];

  constructor(private userService: UserService ){}

  ngOnInit(): void {
    this.userService.getUsers().subscribe(users => this.users = users);
  }

  setUsers(users: User[]){
    this.users = users;
  }
}
