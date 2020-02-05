import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../auth/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  user: User;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.findMe().subscribe(data => {
      this.user = data;
    });
  }

}
