import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DragonsComponent } from './dragons/dragons.component';
import { DragonInfoComponent } from './dragon-info/dragon-info.component';
import { TracerHubComponent } from './tracer-hub/tracer-hub.component';

@NgModule({
  declarations: [
    AppComponent,
    DragonsComponent,
    DragonInfoComponent,
    TracerHubComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
