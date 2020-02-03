import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth/auth-guard';
import { MycontactsComponent } from './mycontacts/mycontacts.component';
import { LandingComponent } from './landing/landing.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  { path: '', component: LandingComponent  },
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent  },
  { path: 'mycontacts', component: MycontactsComponent, canActivate: [AuthGuard]  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
