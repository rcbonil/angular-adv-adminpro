import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graphica1Component } from './graphica1/graphica1.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shares/shared.module';


@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    Graphica1Component,
    PagesComponent
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    Graphica1Component,
    PagesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    FormsModule
  ]
})
export class PagesModule { }
