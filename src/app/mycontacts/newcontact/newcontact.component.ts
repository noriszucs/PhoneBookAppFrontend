import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { Router, NavigationEnd } from '@angular/router';
import { ContactService } from '../../service/contact.service';
import { Contact } from '../../model/contact';
import { UserService } from '../../service/user.service';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/auth/user.model';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-newcontact',
  templateUrl: './newcontact.component.html',
  styleUrls: ['./newcontact.component.css']
})
export class NewcontactComponent implements OnInit {

  user: User;
  contact: Contact;
  selectedItem: string;

  types: any[] = [
    {value: 'home-0', viewValue: 'HOME'},
    {value: 'work-1', viewValue: 'WORK'},
    {value: 'mobil-2', viewValue: 'MOBIL'}
  ];

  groups: any[] = [
    {value: 'family-0', viewValue: 'FAMILY'},
    {value: 'relative-1', viewValue: 'RELATIVE'},
    {value: 'friend-2', viewValue: 'FRIEND'},
    {value: 'coworker-3', viewValue: 'COWORKER'},
    {value: 'acquaintance-4', viewValue: 'ACQUAINTANCE'}
  ];
  
  // tslint:disable-next-line: max-line-length
  constructor(private http: HttpClient, private userService: UserService, private contactService: ContactService, private router: Router) { }

  ngOnInit() {
    this.userService.findMe().subscribe(data => {
      this.user = data;
      console.log(this.user);
    });
  }

  save(form: NgForm) {
    console.log(form.form);
    const name = form.form.value.name;
    const countryCode = form.form.value.countryCode;
    const areaCode = form.form.value.areaCode;
    const number = form.form.value.number;
    const phoneType = form.form.value.phoneType;
    const group = form.form.value.group;
    console.log(name, countryCode, areaCode, number, phoneType, group);
    this.contact = new Contact(name, countryCode, areaCode, number, phoneType, group);
    this.contactService.createContact(this.user.id, this.contact).subscribe((resData: any) => {
      alert('Saving successful!');
      console.log(resData);

      this.router.navigate(['/mycontacts']);
    }, error => {
      alert('Something went wrong! Please try again.')
      console.log(error);
    });
  }

  cancel() {
    this.router.navigate(['/mycontacts']);
  }

  

}
