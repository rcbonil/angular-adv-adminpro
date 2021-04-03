import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Modulos que agrupan otros componenetes
import { PagesRoutingModule } from './pages/pages.routing';

// Componentes de conexion
import { LoginComponent } from './auth/login/login.component';
import { RegistreComponent } from './auth/registre/registre.component';

// Componente de la pagina de error 404
import { NopagesfoundComponent } from './nopagesfound/nopagesfound.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistreComponent },
  { path: '**', component: NopagesfoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
