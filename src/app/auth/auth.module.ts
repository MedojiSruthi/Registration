import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomepageComponent } from './components/user/homepage/homepage.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    HomepageComponent,
  
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ],
  exports:[ LoginComponent,
    RegisterComponent

  ]
})
export class AuthModule { }
