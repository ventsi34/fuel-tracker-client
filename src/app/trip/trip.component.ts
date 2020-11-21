import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

export interface Vehicle {
  _id: string;
  mileage: number;
  fuelAmount: number;
  averageFuelConsumption: number;
  petrolStation: string;
  drivePlace: string[];
  driveType: string;
  season: string;
  airConditionerStatus: boolean;
  isPremiumFuel: boolean;
}

const ELEMENT_DATA: Vehicle[] = [
  {
    _id: '23er3d23',
    mileage: 604,
    fuelAmount: 43.23,
    averageFuelConsumption: 6.54,
    petrolStation: 'Petrol',
    drivePlace: ['city'],
    driveType: 'slow',
    season: 'winter',
    airConditionerStatus: true,
    isPremiumFuel: true
  },
  {
    _id: 'd623g7dg7',
    mileage: 724,
    fuelAmount: 44.23,
    averageFuelConsumption: 5.54,
    petrolStation: 'OMV',
    drivePlace: ['mountain', 'highway'],
    driveType: 'slow',
    season: 'summer',
    airConditionerStatus: false,
    isPremiumFuel: false
  }
];

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.scss']
})
export class TripComponent implements OnInit {
  public vehicleId: string;
  public displayedColumns: string[] = [
    'mileage',
    'fuelAmount',
    'averageFuelConsumption',
    'petrolStation',
    'drivePlace',
    'driveType',
    'season',
    'airConditionerStatus',
    'isPremiumFuel',
    'actions'
  ];
  public dataSource = ELEMENT_DATA;

  constructor(private route: ActivatedRoute) {
    this.vehicleId = this.route.snapshot.paramMap.get('vehicleId');
  }

  ngOnInit(): void {}

  onDelete(id: string): void {
    console.log(id);
  }
}
