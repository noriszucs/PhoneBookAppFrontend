import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { Observable } from 'rxjs';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  onSubmit(form: NgForm) {
    const firstName = form.value.firstName;
    const lastName = form.value.lastName;
    const username = form.value.username;
    const password = form.value.password;
    const email = form.value.email;
    const birthDate = form.value.birthDate;
    console.log(firstName, lastName, username, email, birthDate);

    let authObservable: Observable<any>;

    // tslint:disable-next-line: max-line-length
    authObservable = this.authService.register(firstName, lastName, username, password, email, birthDate);

    authObservable.subscribe(resData => {
      console.log(resData);
      this.router.navigate(['/mycontacts']);
    }, error => {
      console.log(error);
    });
  }

  backHome() {
    this.router.navigate(['']);
  }

  ngOnInit() {
  }

}
