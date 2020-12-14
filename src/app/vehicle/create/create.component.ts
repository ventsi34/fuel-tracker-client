import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  public years: number[] = [];

  constructor() {
    let year: number = new Date().getFullYear();
    const endYear: number = 1970;

    while(year >= endYear) {
      this.years.push(year);
      year--;
    }
  }

  ngOnInit(): void { }

}
