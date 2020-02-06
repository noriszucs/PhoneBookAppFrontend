import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth/auth-guard';
import { MycontactsComponent } from './mycontacts/mycontacts.component';
import { LandingComponent } from './landing/landing.component';
import { RegisterComponent } from './register/register.component';
import { UsersComponent } from './users/users.component';
import { NewcontactComponent } from './mycontacts/newcontact/newcontact.component';


const routes: Routes = [
  { path: '', component: LandingComponent  },
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent  },
  { path: 'mycontacts', component: MycontactsComponent, canActivate: [AuthGuard]  },
  { path: 'myprofile', component: UsersComponent, canActivate: [AuthGuard] },
  { path: 'newcontact', component: NewcontactComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
