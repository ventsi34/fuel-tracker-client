import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VehicleComponent } from './vehicle.component';
import { CreateComponent } from './create/create.component';

const routes: Routes = [
  {path: '', component: VehicleComponent },
  {path: 'create', component: CreateComponent },
  { path: ':id/edit', component: CreateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehicleRoutingModule { }
