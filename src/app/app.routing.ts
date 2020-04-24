import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule, Router} from '@angular/router';

import { EquiposComponent } from './components/equipo/equipos/equipos.component';
import { EquipoNewComponent} from './components/equipo/equipo-new/equipo-new.component';
import { EquipoEditComponent} from './components/equipo/equipo-edit/equipo-edit.component';
import { EquipoShowComponent } from './components/equipo/equipo-show/equipo-show.component';
import { JugadoresComponent } from './components/jugador/jugadores/jugadores.component';
import { JugadorNewComponent } from './components/jugador/jugador-new/jugador-new.component';
import { JugadorEditComponent } from './components/jugador/jugador-edit/jugador-edit.component';
import { JugadorShowComponent } from './components/jugador/jugador-show/jugador-show.component';
import { ArbitrajesComponent } from './components/arbitraje/arbitrajes/arbitrajes.component';
import { ArbitrajeNewComponent } from './components/arbitraje/arbitraje-new/arbitraje-new.component';
import { ArbitrajeEditComponent } from './components/arbitraje/arbitraje-edit/arbitraje-edit.component';
import { ArbitrajeShowComponent } from './components/arbitraje/arbitraje-show/arbitraje-show.component';
import { TAmarillasComponent } from './components/t_amarilla/t-amarillas/t-amarillas.component';
import { TAmarillaNewComponent } from './components/t_amarilla/t-amarilla-new/t-amarilla-new.component';
import { TAmarillaEditComponent } from './components/t_amarilla/t-amarilla-edit/t-amarilla-edit.component';


const appRoutes:Routes=[
    {path:'equipos',component:EquiposComponent},
    {path:'equipo-new',component:EquipoNewComponent},
    {path:'equipo-edit/:id',component:EquipoEditComponent},
    {path:'equipo-show/:id',component:EquipoShowComponent},
    {path:'jugadores',component:JugadoresComponent},
    {path:'jugador-new',component:JugadorNewComponent},
    {path:'jugador-edit/:id',component:JugadorEditComponent},
    {path:'jugador-show/:id',component:JugadorShowComponent},
    {path:'arbitrajes',component:ArbitrajesComponent},
    {path:'arbitraje-new',component:ArbitrajeNewComponent},
    {path:'arbitraje-edit/:id',component:ArbitrajeEditComponent},
    {path:'arbitraje-show/:id',component:ArbitrajeShowComponent},
    {path:'tamarillas',component:TAmarillasComponent},
    {path:'tamarillas-new',component:TAmarillaNewComponent},
    {path:'tamarillas-edit/:id',component:TAmarillaEditComponent}
    
];
export const appRoutingProviders:any[]=[];
export const routing:ModuleWithProviders=RouterModule.forRoot(appRoutes);