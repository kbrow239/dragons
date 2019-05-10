import { Component, OnInit } from '@angular/core';

import { DragonService } from '../dragon.service';

import { Dragon } from '../dragon';
import { DRAGONS } from '../mock-dragons';

@Component({
  selector: 'app-dragons',
  templateUrl: './dragons.component.html',
  styleUrls: ['./dragons.component.css']
})
export class DragonsComponent implements OnInit {

  dragons: Dragon[];

  constructor(private dragonService: DragonService) { }

  ngOnInit() {
    this.getDragons();
  }

  getDragons(): void {
    this.dragonService.getDragons()
      .subscribe(dragons => this.dragons = dragons);
  }

}
