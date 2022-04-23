import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ListOptionsApiNasaComponent } from "./main/api-nasa/component/list-options-api-nasa/list-options-api-nasa.component";
import { AllApisComponent } from "./main/components/all-apis/all-apis.component";


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
    }
] 

@NgModule({
    imports: [ RouterModule.forRoot(routes)],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}