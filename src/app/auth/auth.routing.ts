import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { RegistreComponent } from './registre/registre.component';
import { LoginComponent } from './login/login.component';



const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegistreComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule { }
