import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

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
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.scss']
})
export class TripComponent implements OnInit {
  public vehicleId: string;
  public displayedColumns: string[] = ['mark', 'model', 'year', 'actions'];
  public dataSource = ELEMENT_DATA;

  constructor(private route: ActivatedRoute) {
    this.vehicleId = this.route.snapshot.paramMap.get('vehicleId');
  }

  ngOnInit(): void {
  }

}
