import { Component, OnInit } from '@angular/core';

export interface Vehicle {
  _id: string;
  mark: string;
  model: string;
  year: number;
}

const ELEMENT_DATA: Vehicle[] = [
  { _id: '23er3d23', mark: 'VW', model: 'Golf', year: 2008 },
];

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss']
})
export class VehicleComponent implements OnInit {

  displayedColumns: string[] = ['mark', 'model', 'year', 'actions'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(id: string): void {
    console.log(id);
  }
}
