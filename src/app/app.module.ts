import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgImageSliderModule } from 'ng-image-slider';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselComponent } from './componentes/carousel/carousel.component';
import { ComponentesComponent } from './componentes/componentes.component';
import { BuscarComponent } from './componentes/buscar/buscar.component';
import { HomeComponent } from './componentes/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    ComponentesComponent,
    CarouselComponent,
    BuscarComponent,
    HomeComponent,  
  ],
  imports: [
    BrowserModule,
    NgImageSliderModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
