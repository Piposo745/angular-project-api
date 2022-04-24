import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-list-options-api-nasa',
  templateUrl: './list-options-api-nasa.component.html',
  providers: [DatePipe]
})
export class ListOptionsApiNasaComponent implements OnInit {

  date: any
  validationRenderezation: boolean = false;

  constructor(private datePide: DatePipe) { }

  ngOnInit(): void {

  }

  convertDate() {
    this.date = this.datePide.transform(this.date, 'yyyy-MM-dd')
    console.log(this.date)

    this.date = this.transform(this.date, '/', '-')
    console.log(this.date)

    window.localStorage.setItem("dataParameter", this.date);
  }

  transform(value: string, char: string, valueToReplace: string) {
    return value.replace(char, valueToReplace);
  }
}
