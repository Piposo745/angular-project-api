import { Component, OnInit } from '@angular/core';
import { ApiNasaModel } from '../../../../model/api-nasa.model';
import { RequisicoesApiNasaService } from '../../../../services/requisicoes-api-nasa.service';

@Component({
  selector: 'app-view-result-api-five-photos',
  templateUrl: './view-result-api-five-photos.component.html',
  styleUrls: ['./view-result-api-five-photos.component.css']
})
export class ViewResultApiFivePhotosComponent implements OnInit {

  fivePhotos: ApiNasaModel[]

  constructor(
    private requisicoesApiNasaService: RequisicoesApiNasaService
  ) { }

  ngOnInit(): void {
    this.getFivePhotos();
  }

  getFivePhotos(): void {
    this.requisicoesApiNasaService.getFivePhotos().subscribe({
      next: nasaFivePhoto => {
        this.fivePhotos = nasaFivePhoto;
      },
      error: err => console.log("Error", err)
    })
  }
}
