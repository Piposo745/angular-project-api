import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiNasaModel } from '../model/api-nasa.model';

@Injectable({
  providedIn: 'root'
})
export class RequisicoesApiNasaService {

  

  private readonly BASE_URL: string = 'https://api.nasa.gov/planetary/apod?api_key=vQMs1AnubkwxDgYOw26cUEoOVqmqYRsOAc1uOc73'

  constructor(
    private httpClient: HttpClient
  ) { }

  getPhotoToday(): Observable<ApiNasaModel> {
    return this.httpClient.get<ApiNasaModel>(this.BASE_URL);
  }

  getFivePhotos(): Observable<ApiNasaModel[]> {
    return this.httpClient.get<ApiNasaModel[]>(`${this.BASE_URL}&count=5`)
  }

  getPhotoByDate(date: string): Observable<ApiNasaModel> {
    return this.httpClient.get<ApiNasaModel>(`${this.BASE_URL}&date=${date}`)
  }
}
