import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeiroComponenteComponenet } from './primeiro-componente/primeiro-componente.component';
import { SegundoComponenteComponent } from './segundo-componente/segundo-componente.component';
import { MultiplicaPorPipe } from './multiplica-por.pipe';
import { PipCustomizadoComponent } from './pip-customizado/pip-customizado.component';
import { RenderizandoListasComponent } from './renderizando-listas/renderizando-listas.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimeiroComponenteComponenet,
    SegundoComponenteComponent,
    MultiplicaPorPipe,
    PipCustomizadoComponent,
    RenderizandoListasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
