import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {routing, appRoutingProviders} from './app.routing';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
//import { NgSelectModule } from '@ng-select/ng-select';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/adminlte/header/header.component';
import { MenuComponent } from './components/adminlte/menu/menu.component';
import { ContentComponent } from './components/adminlte/content/content.component';
import { FooterComponent } from './components/adminlte/footer/footer.component';
import { SettingComponent } from './components/adminlte/setting/setting.component';
import { EquiposComponent } from './components/equipo/equipos/equipos.component';
import { EquipoNewComponent } from './components/equipo/equipo-new/equipo-new.component';
import { EquipoEditComponent } from './components/equipo/equipo-edit/equipo-edit.component';

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
    EquipoEditComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    FormsModule
    //NgSelectModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
