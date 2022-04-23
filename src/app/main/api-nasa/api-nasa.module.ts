import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListOptionsApiNasaComponent } from './component/list-options-api-nasa/list-options-api-nasa.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ListOptionsApiNasaComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ApiNasaModule { }
