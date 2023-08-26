import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarticlesComponent } from './listarticles/listarticles.component';
import { CreatearticleComponent } from './createarticle/createarticle.component';
import { EditarticleComponent } from './editarticle/editarticle.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarticlesComponent,
    CreatearticleComponent,
    EditarticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
