import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { TripRoutingModule } from './trip-routing.module';
import { TripComponent } from './trip.component';
import { CreateComponent } from './create/create.component';


@NgModule({
  declarations: [TripComponent, CreateComponent],
  imports: [
    CommonModule,
    TripRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class TripModule { }
