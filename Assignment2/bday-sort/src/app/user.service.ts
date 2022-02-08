import { Injectable, OnInit} from '@angular/core';
import { User } from './User';
import { USERS } from './mock-users';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService{

  users : User[] = [];

  constructor() { 
    this.users = USERS;
  }

  getUsers(): Observable<User[]>{
    const oUsers = of(this.users)
    return oUsers;
  } 

  setUsers(users: User[]): void{
    this.users = users;
  }

}
