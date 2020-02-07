import { Component, OnInit } from '@angular/core';
import { ContactService } from '../service/contact.service';
import { Contact } from '../model/contact';
import { Router, NavigationEnd } from '@angular/router';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-mycontacts',
  templateUrl: './mycontacts.component.html',
  styleUrls: ['./mycontacts.component.css']
})
export class MycontactsComponent implements OnInit {

  contacts: Contact[];
  displayedColumns: string[] = ['select', 'name', 'countryCode', 'areaCode', 'number', 'phoneType', 'group', 'delete'];
  selection = new SelectionModel<Contact>(true, []);
  checked: boolean;
  //data = Object.assign(this.contacts);
  //dataSource = new MatTableDataSource<Contact>(this.data);

  constructor(private contactService: ContactService, private router: Router) { }

  ngOnInit() {
    this.contactService.findMyContact().subscribe(data => {
      this.contacts = data;
    });
  }

  addNew() {
    this.router.navigate(['/newcontact']);
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.contacts.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.contacts.forEach(row => this.selection.select(row));
  }

  delete(id: number) {
    this.contactService.deleteById(id).subscribe(data => {
      this.contacts = data;
      alert('Contact deleted!');
      this.contactService.findMyContact().subscribe(result => {
        this.contacts = result;
        console.log(this.contacts);
      });
    });
  }

  deleteByName(name: string) {
    this.contactService.deleteByName(name).subscribe(data => {
      this.contacts = data;
      alert('Contact deleted by name!');
      this.contactService.findMyContact().subscribe(result => {
        this.contacts = result;
        console.log(this.contacts);
      });
    });
  }

  /*deleteById(id: number) {
    this.selection.selected.forEach(item => {
      this.contactService.deleteById(id).subscribe(data => data === item);
      console.log(this.contactService.deleteById(id).subscribe(data => data === item));
      alert('Contact deleted');
      this.contactService.findMyContact().subscribe(result => {
        this.contacts = result;
        console.log(this.contacts);
      });
    });
  }*/

}
