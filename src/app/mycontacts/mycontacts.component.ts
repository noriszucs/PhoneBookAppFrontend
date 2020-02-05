import { Component, OnInit } from '@angular/core';
import { ContactService } from '../service/contact.service';
import { Contact } from '../model/contact';

@Component({
  selector: 'app-mycontacts',
  templateUrl: './mycontacts.component.html',
  styleUrls: ['./mycontacts.component.css']
})
export class MycontactsComponent implements OnInit {

  contacts: Contact[];
  displayedColumns: string[] = ['name', 'countryCode', 'areaCode', 'number', 'phoneType', 'group'];

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.contactService.findMyContact().subscribe(data => {
      this.contacts = data;
    });
  }

}
