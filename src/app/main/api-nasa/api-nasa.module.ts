import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListOptionsApiNasaComponent } from './component/list-options-api-nasa/list-options-api-nasa.component';
import { RouterModule } from '@angular/router';
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatInputModule} from '@angular/material/input'
import { MatNativeDateModule } from '@angular/material/core'
import { ViewResultApiPhotoTodayComponent } from './component/list-options-api-nasa/view-result-api/view-result-api-photo-today/view-result-api-photo-today.component';
import { ViewResultApiFivePhotosComponent } from './component/list-options-api-nasa/view-result-api/view-result-api-five-photos/view-result-api-five-photos.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { ViewResultApiPhotoByIdComponent } from './component/list-options-api-nasa/view-result-api/view-result-api-photo-by-id/view-result-api-photo-by-id.component';



@NgModule({
  declarations: [
    ListOptionsApiNasaComponent,
    ViewResultApiFivePhotosComponent,
    ViewResultApiPhotoTodayComponent,
    ViewResultApiPhotoByIdComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatFormFieldModule,
    FormsModule
  ]
})
export class ApiNasaModule { }
