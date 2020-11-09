import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.scss']
})
export class TripComponent implements OnInit {
  public vehicleId: string;

  constructor(private route: ActivatedRoute) {
    this.vehicleId = this.route.snapshot.paramMap.get('vehicleId');
  }

  ngOnInit(): void {
  }

}
