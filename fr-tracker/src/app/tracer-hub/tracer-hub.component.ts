import { Component, OnInit } from '@angular/core';

import { Dragon } from '../dragon';
import { DragonService } from '../dragon.service';

@Component({
  selector: 'app-tracer-hub',
  templateUrl: './tracer-hub.component.html',
  styleUrls: ['./tracer-hub.component.css']
})
export class TracerHubComponent implements OnInit {

  dragons: Dragon[] = [];

  constructor(private dragonService: DragonService) { }

  ngOnInit() {
    this.getDragons();
  }
/*this.dragons.slice(Math.max(dragons.length -5, 1))*/
  getDragons(): void {
    this.dragonService.getDragons()
      .subscribe(dragons => this.dragons = dragons.slice(Math.max(dragons.length -5, 0)));
  }

}
