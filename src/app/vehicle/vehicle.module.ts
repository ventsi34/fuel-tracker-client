import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { VehicleRoutingModule } from './vehicle-routing.module';
import { VehicleComponent } from './vehicle.component';
import { CreateComponent } from './create/create.component';


@NgModule({
  declarations: [VehicleComponent, CreateComponent],
  imports: [
    CommonModule,
    VehicleRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class VehicleModule { }
