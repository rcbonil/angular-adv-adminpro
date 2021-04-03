import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Routers
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistreComponent } from './auth/registre/registre.component';
import { NopagesfoundComponent } from './pages/nopagesfound/nopagesfound.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BreadcrumbsComponent } from './shares/breadcrumbs/breadcrumbs.component';
import { SidebarComponent } from './shares/sidebar/sidebar.component';
import { HeaderComponent } from './shares/header/header.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Graphica1Component } from './pages/graphica1/graphica1.component';
import { PagesComponent } from './pages/pages.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistreComponent,
    NopagesfoundComponent,
    DashboardComponent,
    BreadcrumbsComponent,
    SidebarComponent,
    HeaderComponent,
    ProgressComponent,
    Graphica1Component,
    PagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
