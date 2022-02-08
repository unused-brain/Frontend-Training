import { Injectable } from '@angular/core';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class SortingService {

  constructor() { }

  sortByName(users: User[]): User[]{
    users.sort((a, b) => {
      return a.name.localeCompare(b.name);
    })

    return users;
  }

  sortByAge(users: User[]): User[]{
    users.sort((a, b) => {
      return b.age - a.age;
    })

    return users;
  }

}
