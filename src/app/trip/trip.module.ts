import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TripRoutingModule } from './trip-routing.module';
import { TripComponent } from './trip.component';
import { CreateComponent } from './create/create.component';


@NgModule({
  declarations: [TripComponent, CreateComponent],
  imports: [
    CommonModule,
    TripRoutingModule
  ]
})
export class TripModule { }
