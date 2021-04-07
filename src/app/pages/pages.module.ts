import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

// Modulos importados
import { SharedModule } from '../shares/shared.module';
import { ComponentsModule } from '../components/components.module';

// Modules de la sección Pages
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graphica1Component } from './graphica1/graphica1.component';
import { ProgressComponent } from './progress/progress.component';
import { PagesComponent } from './pages.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    Graphica1Component,
    PagesComponent,
    AccountSettingsComponent
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    Graphica1Component,
    PagesComponent,
    AccountSettingsComponent
  ],
  imports: [
    SharedModule,
    ComponentsModule,
    CommonModule,
    RouterModule,
    FormsModule
  ]
})
export class PagesModule { }
