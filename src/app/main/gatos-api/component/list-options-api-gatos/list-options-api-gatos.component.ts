import { Component, OnInit } from '@angular/core';
import { ApiGatos } from '../../model/api-gatos.model';
import { RequisicoesApiGatosService } from '../../services/requisicoes-api-gatos.service';

@Component({
  selector: 'app-list-options-api-gatos',
  templateUrl: './list-options-api-gatos.component.html',
})
export class ListOptionsApiGatosComponent implements OnInit {

  fillingType: any

  constructor(
    private requisicoesApiGatosService: RequisicoesApiGatosService
  ) { }

  ngOnInit(): void {
  }

  fillingTypeRequest() {
    window.localStorage.setItem("fillingType", this.fillingType)
  }

  fillTypesCat: any[] = [
    {value: 'gif', viewValue: 'gif'},
    {value: 'jpg,png', viewValue: 'jpg,png'},
    {value: 'gif,jpg,png', viewValue: 'gif,jpg,png'},
  ];
}
