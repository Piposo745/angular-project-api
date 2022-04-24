import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ListOptionsApiNasaComponent } from "./main/api-nasa/component/list-options-api-nasa/list-options-api-nasa.component";
import { ViewResultApiFivePhotosComponent } from "./main/api-nasa/component/list-options-api-nasa/view-result-api/view-result-api-five-photos/view-result-api-five-photos.component";
import { ViewResultApiPhotoTodayComponent } from "./main/api-nasa/component/list-options-api-nasa/view-result-api/view-result-api-photo-today/view-result-api-photo-today.component";
import { AllApisComponent } from "./main/components/all-apis/all-apis.component";
import { ViewResultApiPhotoByIdComponent } from "./main/api-nasa/component/list-options-api-nasa/view-result-api/view-result-api-photo-by-id/view-result-api-photo-by-id.component";

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'all-apis',
        pathMatch: 'full'
    },
    {
        path: 'all-apis', component: AllApisComponent
    },
    {
        path: 'list-options/api/nasa', component: ListOptionsApiNasaComponent
    },
    {
        path: 'list-options/api/nasa/api-result/photo-today', component: ViewResultApiPhotoTodayComponent
    },
    {
        path: 'list-options/api/nasa/api-result/five-photo', component: ViewResultApiFivePhotosComponent
    },
    {
        path: 'list-options/api/nasa/api-result/photo-by-id', component: ViewResultApiPhotoByIdComponent
    }
] 

@NgModule({
    imports: [ RouterModule.forRoot(routes)],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}