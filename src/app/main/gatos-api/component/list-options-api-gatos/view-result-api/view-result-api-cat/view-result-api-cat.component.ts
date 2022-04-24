import { Component, OnInit } from '@angular/core';
import { ApiGatos } from 'src/app/main/gatos-api/model/api-gatos.model';
import { RequisicoesApiGatosService } from 'src/app/main/gatos-api/services/requisicoes-api-gatos.service';

@Component({
  selector: 'app-view-result-api-cat',
  templateUrl: './view-result-api-cat.component.html',
})
export class ViewResultApiCatComponent implements OnInit {

  catRequest: ApiGatos[]

  constructor(
    private requisicoesApiGatosService: RequisicoesApiGatosService
  ) { }

  ngOnInit(): void {
    this.getCatRequestImage()
  }

  getCatRequestImage(): void {
    this.requisicoesApiGatosService.getCat().subscribe({
      next: catPhoto => {
        this.catRequest = catPhoto;
        console.log(this.catRequest)
      },
      error: err => console.log("Error:", err)
    })
  }

}
