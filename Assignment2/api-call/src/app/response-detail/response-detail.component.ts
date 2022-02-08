import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
import { Response  } from '../Response';

@Component({
  selector: 'app-response-detail',
  templateUrl: './response-detail.component.html',
  styleUrls: ['./response-detail.component.css']
})
export class ResponseDetailComponent implements OnInit {

  response: Response[] = [];

  constructor(private requestService: RequestService) { }

  ngOnInit(): void {
    this.getDetails();
  }

  getDetails(): void{
    this.requestService.getResponse().subscribe(response => this.response = response);
  }

}
