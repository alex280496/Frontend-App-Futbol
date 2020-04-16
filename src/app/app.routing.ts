import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule, Router} from '@angular/router';

import { EquiposComponent } from './components/equipo/equipos/equipos.component';
import {EquipoNewComponent} from './components/equipo/equipo-new/equipo-new.component';
import {EquipoEditComponent} from './components/equipo/equipo-edit/equipo-edit.component';
import { EquipoShowComponent } from './components/equipo/equipo-show/equipo-show.component';


const appRoutes:Routes=[
    {path:'equipos',component:EquiposComponent},
    {path:'equipo-crear',component:EquipoNewComponent},
    {path:'equipo-edit/:id',component:EquipoEditComponent},
    {path:'equipo-show/:id',component:EquipoShowComponent}
    
];
export const appRoutingProviders:any[]=[];
export const routing:ModuleWithProviders=RouterModule.forRoot(appRoutes);