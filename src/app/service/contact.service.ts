import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from '../model/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  findMyContact(): Observable<any> {
    return this.http.get('//localhost:8080/api/mycontacts');
  }

  createContact(id: number, contact: Contact) {    
    return this.http.post(`http://localhost:8080/api/users/id/${id}/contact`, contact, {
      headers : new HttpHeaders({
      'Content-Type': 'application/json'
    })
  });
  }
}
