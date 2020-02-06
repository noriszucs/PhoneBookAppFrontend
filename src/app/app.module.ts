import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from './material/material';
import { MycontactsComponent } from './mycontacts/mycontacts.component';
import { LandingComponent } from './landing/landing.component';
import { RegisterComponent } from './register/register.component';
import { UsersComponent } from './users/users.component';
import { NewcontactComponent } from './mycontacts/newcontact/newcontact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    MycontactsComponent,
    LandingComponent,
    RegisterComponent,
    UsersComponent,
    NewcontactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
