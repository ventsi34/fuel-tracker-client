import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { TripRoutingModule } from './trip-routing.module';
import { TripComponent } from './trip.component';
import { CreateComponent } from './create/create.component';
import { DriveTypeIconPipe } from './pipes/drive-type-icon.pipe';
import { SeasonIconPipe } from './pipes/season-icon.pipe';
import { AirConditionerIconPipe } from './pipes/air-conditioner-icon.pipe';
import { PremiumFuelIconPipe } from './pipes/premium-fuel-icon.pipe';
import { DrivePlaceIconPipe } from './pipes/drive-place-icon.pipe';

@NgModule({
  declarations: [TripComponent, CreateComponent, DriveTypeIconPipe, SeasonIconPipe, AirConditionerIconPipe, PremiumFuelIconPipe, DrivePlaceIconPipe],
  imports: [
    CommonModule,
    TripRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule,
    MatRadioModule
  ]
})
export class TripModule { }
