import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DragonsComponent } from './dragons/dragons.component';
import { TracerHubComponent }   from './tracer-hub/tracer-hub.component';
import { DragonInfoComponent } from './dragon-info/dragon-info.component';

const routes: Routes = [
  { path: '', redirectTo: '/hub', pathMatch: 'full' },
  {path: 'hub', component: TracerHubComponent},
  {path: 'dragons', component: DragonsComponent}, 
  {path: 'info/:id', component: DragonInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
