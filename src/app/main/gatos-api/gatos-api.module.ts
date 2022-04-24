import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ListOptionsApiGatosComponent } from './component/list-options-api-gatos/list-options-api-gatos.component';
import { ViewResultApiCatComponent } from './component/list-options-api-gatos/view-result-api/view-result-api-cat/view-result-api-cat.component';
import { ViewResultApiTypeFillCatComponent } from './component/list-options-api-gatos/view-result-api/view-result-api-type-fill-cat/view-result-api-type-fill-cat.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { PipeSafeCat } from './pipe/pipe-safe-cat';

@NgModule({
  declarations: [
    ListOptionsApiGatosComponent,
    ViewResultApiCatComponent,
    ViewResultApiTypeFillCatComponent,
    PipeSafeCat
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatFormFieldModule,
    FormsModule,
    MatSelectModule
  ]
})
export class GatosApiModule { }
