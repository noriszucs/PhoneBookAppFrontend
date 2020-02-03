import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(form: NgForm) {
    const username = form.value.username;
    const password = form.value.password;
    console.log(username, password);

    let authObservable: Observable<any>;

    authObservable = this.authService.login(username, password);

    authObservable.subscribe(resData => {
      console.log(resData);
      this.router.navigate(['/mycontacts']);
    }, error => {
      console.log(error);
    });
  }

  ngOnInit() {
  }

}