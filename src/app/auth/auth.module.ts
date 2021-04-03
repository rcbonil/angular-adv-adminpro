import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login/login.component';
import { RegistreComponent } from './registre/registre.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegistreComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoginComponent,
    RegistreComponent
  ]
})
export class AuthModule { }
