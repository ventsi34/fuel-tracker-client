import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehicleRoutingModule } from './vehicle-routing.module';
import { VehicleComponent } from './vehicle.component';
import { CreateComponent } from './create/create.component';


@NgModule({
  declarations: [VehicleComponent, CreateComponent],
  imports: [
    CommonModule,
    VehicleRoutingModule
  ]
})
export class VehicleModule { }
