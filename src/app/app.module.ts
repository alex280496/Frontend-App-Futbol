import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {routing, appRoutingProviders} from './app.routing';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/adminlte/header/header.component';
import { MenuComponent } from './components/adminlte/menu/menu.component';
import { ContentComponent } from './components/adminlte/content/content.component';
import { FooterComponent } from './components/adminlte/footer/footer.component';
import { SettingComponent } from './components/adminlte/setting/setting.component';
import { EquiposComponent } from './components/equipo/equipos/equipos.component';
import { EquipoNewComponent } from './components/equipo/equipo-new/equipo-new.component';
import { EquipoEditComponent } from './components/equipo/equipo-edit/equipo-edit.component';
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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    ContentComponent,
    FooterComponent,
    SettingComponent,
    EquiposComponent,
    EquipoNewComponent,
    EquipoEditComponent,
    EquipoShowComponent,
    JugadoresComponent,
    JugadorNewComponent,
    JugadorEditComponent,
    JugadorShowComponent,
    ArbitrajesComponent,
    ArbitrajeNewComponent,
    ArbitrajeEditComponent,
    ArbitrajeShowComponent,
    TAmarillasComponent,
    TAmarillaNewComponent,
    TAmarillaEditComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    FormsModule,
    NgSelectModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
