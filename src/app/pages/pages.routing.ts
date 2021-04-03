/* 

    Esta pagina contiene las rutas hijas del folder Pages
    y estas son importadas en el archivo de rutas principales
    app-routing.module.ts

*/

import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graphica1Component } from './graphica1/graphica1.component';

const routes: Routes = [
    {
        path: 'dashboard',
        component: PagesComponent,
        children: [
            { path: '', component: DashboardComponent },
            { path: 'progress', component: ProgressComponent },
            { path: 'graphica1', component: Graphica1Component },
        ]
    },
];


@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class PagesRoutingModule { }
