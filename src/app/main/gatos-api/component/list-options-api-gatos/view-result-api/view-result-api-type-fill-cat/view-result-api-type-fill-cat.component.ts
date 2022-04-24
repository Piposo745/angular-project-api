import { Component, OnInit } from '@angular/core';
import { ApiGatos } from 'src/app/main/gatos-api/model/api-gatos.model';
import { RequisicoesApiGatosService } from 'src/app/main/gatos-api/services/requisicoes-api-gatos.service';

@Component({
  selector: 'app-view-result-api-type-fill-cat',
  templateUrl: './view-result-api-type-fill-cat.component.html',
})

export class ViewResultApiTypeFillCatComponent implements OnInit {

  catFill: ApiGatos[]
  fillType: any = window.localStorage.getItem("fillingType")

  constructor(
    private requisicoesApiGatosService: RequisicoesApiGatosService
  ) { }

  ngOnInit(): void {
    this.getPhotoByFillType(this.fillType)
  }

  getPhotoByFillType(fillType: string): void {
    this.requisicoesApiGatosService.getCatByFillType(fillType).subscribe({
      next: catRequest => {
        this.catFill = catRequest
      },
      error: err => console.log("Error:", err)
    })
  }

}
