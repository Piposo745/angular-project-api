import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiGatos } from '../model/api-gatos.model';

@Injectable({
  providedIn: 'root'
})
export class RequisicoesApiGatosService {

  private readonly BASE_URL:  string = 'https://api.thecatapi.com/v1/images/search';

  constructor(
    private httpClient: HttpClient
  ) { }

  getCat(): Observable<ApiGatos[]> {
    return this.httpClient.get<ApiGatos[]>(this.BASE_URL);
  }

  getCatByFillType(filltype: string): Observable<ApiGatos[]> {
    return this.httpClient.get<ApiGatos[]>(`${this.BASE_URL}?mime_types=${filltype}`)

  }


}
