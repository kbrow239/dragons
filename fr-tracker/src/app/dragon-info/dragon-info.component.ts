import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Dragon } from '../dragon';
import { DragonService } from '../dragon.service';


@Component({
  selector: 'app-dragon-info',
  templateUrl: './dragon-info.component.html',
  styleUrls: ['./dragon-info.component.css']
})
export class DragonInfoComponent implements OnInit {

  dragon: Dragon;

  constructor(
    private route: ActivatedRoute,
    private dragonService: DragonService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getDragon();
  }


  getDragon(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.dragonService.getDragon(id)
      .subscribe(dragon => this.dragon = dragon);
  }

  goBack(): void {
    this.location.back();
  }

}
