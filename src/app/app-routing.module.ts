import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ListOptionsApiNasaComponent } from "./main/api-nasa/component/list-options-api-nasa/list-options-api-nasa.component";
import { ViewResultApiFivePhotosComponent } from "./main/api-nasa/component/list-options-api-nasa/view-result-api/view-result-api-five-photos/view-result-api-five-photos.component";
import { ViewResultApiPhotoTodayComponent } from "./main/api-nasa/component/list-options-api-nasa/view-result-api/view-result-api-photo-today/view-result-api-photo-today.component";
import { AllApisComponent } from "./main/components/all-apis/all-apis.component";
import { ViewResultApiPhotoByIdComponent } from "./main/api-nasa/component/list-options-api-nasa/view-result-api/view-result-api-photo-by-id/view-result-api-photo-by-id.component";
import { ListOptionsApiGatosComponent } from "./main/gatos-api/component/list-options-api-gatos/list-options-api-gatos.component";
import { ViewResultApiCatComponent } from "./main/gatos-api/component/list-options-api-gatos/view-result-api/view-result-api-cat/view-result-api-cat.component";
import { ViewResultApiTypeFillCatComponent } from "./main/gatos-api/component/list-options-api-gatos/view-result-api/view-result-api-type-fill-cat/view-result-api-type-fill-cat.component";

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
    },
    {
        path: 'list-options/api/gatos', component: ListOptionsApiGatosComponent
    },
    {
        path: 'list-options/api/gatos/api-result/cat-image', component: ViewResultApiCatComponent
    },
    {
        path: 'list-options/api/gatos/api-result/cat-fill-type', component: ViewResultApiTypeFillCatComponent
    },
    {
        path: '**', redirectTo: 'all-apis', pathMatch: 'full'
    }

] 

@NgModule({
    imports: [ RouterModule.forRoot(routes)],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}