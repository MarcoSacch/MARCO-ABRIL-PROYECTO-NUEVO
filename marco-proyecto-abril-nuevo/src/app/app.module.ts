import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './components/body/body.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { SobremiComponent } from './components/sobremi/sobremi.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { PortafolioComponent } from './components/portafolio/portafolio.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    InicioComponent,
    SobremiComponent,
    ServiciosComponent,
    HabilidadesComponent,
    PortafolioComponent,
    ContactoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }






