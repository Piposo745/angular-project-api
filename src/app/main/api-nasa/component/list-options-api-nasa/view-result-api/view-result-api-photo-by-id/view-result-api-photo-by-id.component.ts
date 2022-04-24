import { Component, Input, OnInit } from '@angular/core';
import { ApiNasaModel } from 'src/app/main/api-nasa/model/api-nasa.model';
import { RequisicoesApiNasaService } from 'src/app/main/api-nasa/services/requisicoes-api-nasa.service';

@Component({
  selector: 'app-view-result-api-photo-by-id',
  templateUrl: './view-result-api-photo-by-id.component.html',
  styleUrls: ['./view-result-api-photo-by-id.component.css']
})
export class ViewResultApiPhotoByIdComponent implements OnInit {

  photoByDate: ApiNasaModel
  date: any = window.localStorage.getItem("dataParameter")

  constructor(private requisicoesApiNasaService: RequisicoesApiNasaService) { }

  ngOnInit(): void {
    this.getPhotoByDate(this.date);
    console.log(this.date)
  }

  getPhotoByDate(date: string): void {
    this.requisicoesApiNasaService.getPhotoByDate(date).subscribe({
      next: photoDate => {
        this.photoByDate = photoDate
        console.log(this.photoByDate)
      }
    })
  }
}
