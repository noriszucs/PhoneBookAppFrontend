import { Component, OnInit } from '@angular/core';
import { ContactService } from '../service/contact.service';
import { Contact } from '../model/contact';
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-mycontacts',
  templateUrl: './mycontacts.component.html',
  styleUrls: ['./mycontacts.component.css']
})
export class MycontactsComponent implements OnInit {

  contacts: Contact[];
  displayedColumns: string[] = ['name', 'countryCode', 'areaCode', 'number', 'phoneType', 'group'];

  constructor(private contactService: ContactService, private router: Router) { }

  ngOnInit() {
    this.contactService.findMyContact().subscribe(data => {
      this.contacts = data;
    });
  }

  addNew() {
    this.router.navigate(['/newcontact']);
  }

}
