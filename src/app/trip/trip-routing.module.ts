import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TripComponent } from './trip.component';
import { CreateComponent } from './create/create.component';

const routes: Routes = [
  { path: '', component: TripComponent },
  { path: 'create', component: CreateComponent },
  { path: ':id/edit', component: CreateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TripRoutingModule { }
