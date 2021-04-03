import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Componente de la pagina de error 404
import { NopagesfoundComponent } from './nopagesfound/nopagesfound.component';

// Modulos que agrupan otros componenetes
import { PagesRoutingModule } from './pages/pages.routing';
import { AuthRoutingModule } from './auth/auth.routing'

const routes: Routes = [

  // path: '/dashboard' PagesRouting
  // path: '/auth' AuthRoutingModule

  { path: '**', component: NopagesfoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
