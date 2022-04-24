import { Component, Input, OnInit } from '@angular/core';
import { ApiNasaModel } from '../../../../model/api-nasa.model';
import { RequisicoesApiNasaService } from '../../../../services/requisicoes-api-nasa.service';

@Component({
  selector: 'app-view-result-api-photo-today',
  templateUrl: './view-result-api-photo-today.component.html',
  styleUrls: ['./view-result-api-photo-today.component.css']
})
export class ViewResultApiPhotoTodayComponent implements OnInit {

  todayDate: Date = new Date()
  photoToday: ApiNasaModel

  constructor(
    private requisicoesApiNasaService: RequisicoesApiNasaService
  ) { }

  ngOnInit(): void {
    this.getPhotoToday()
  }

  getPhotoToday(): void {
    this.requisicoesApiNasaService.getPhotoToday().subscribe({
      next: nasaPhoto => {
        this.photoToday = nasaPhoto;
      },
      error: err => console.log("Error", err)
    })
  }

}
