import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  findMyContact(): Observable<any> {
    return this.http.get('//localhost:8080/api/mycontacts');
  }

}
