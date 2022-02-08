import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { User } from '../User';
import { SortingService } from '../sorting.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.css']
})
export class RadioButtonComponent implements OnInit {

  @Output() newItemEvent;

  constructor(private userService: UserService, private sortingService: SortingService) {
    this.newItemEvent = new EventEmitter<User[]>();
   }

  ngOnInit(): void {
  }

  sortByName(): void{
    let users: User[] = [];

    this.userService.getUsers().subscribe(obj => users = obj);

    this.sortingService.sortByName(users);
  }

  sortByAge(): void{
    let users: User[] = [];

    this.userService.getUsers().subscribe(obj => users = obj);

    this.sortingService.sortByAge(users);

    this.newItemEvent.emit(users);
  }

}
