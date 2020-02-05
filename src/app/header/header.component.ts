import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { throwToolbarMixedModesError } from '@angular/material';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isAuthenticated = false;
  private userSub: Subscription;

  constructor(private authService: AuthService, private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.userSub = this.authService.token.subscribe(token => {
      this.isAuthenticated = !!token;
    }
      );
  }


  // tslint:disable-next-line: use-lifecycle-interface
  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  myprofil() {
    this.userService.findMe();
    this.router.navigate(['/myprofile']);
  }

  mycontacts() {
    this.router.navigate(['/mycontacts']);
  }

}
