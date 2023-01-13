import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { DetallesComponent } from './detalles/detalles.component';
import { RouterLink } from '@angular/router';



@NgModule({
  declarations: [
    HomeComponent,
    DetallesComponent
  ],
  imports: [
    CommonModule,
    RouterLink
  ],
  exports:[
    HomeComponent
  ]
})
export class PagesModule { }
