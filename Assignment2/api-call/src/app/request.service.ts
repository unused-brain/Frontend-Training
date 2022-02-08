import { Injectable } from '@angular/core';
import { Response } from './Response';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getResponse(): Observable<Response[]>{
    return this.http.get<Response[]>(this.url);
  }
}
