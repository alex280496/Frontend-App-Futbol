import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/adminlte/header/header.component';
import { MenuComponent } from './components/adminlte/menu/menu.component';
import { ContentComponent } from './components/adminlte/content/content.component';
import { FooterComponent } from './components/adminlte/footer/footer.component';
import { SettingComponent } from './components/adminlte/setting/setting.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    ContentComponent,
    FooterComponent,
    SettingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
