import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllApisComponent } from './components/all-apis/all-apis.component';
import { ApiNasaModule } from './api-nasa/api-nasa.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AllApisComponent
  ],
  imports: [
    CommonModule,
    ApiNasaModule,
    RouterModule
  ]
})
export class MainModule { }
