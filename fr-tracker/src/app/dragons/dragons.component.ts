import { Component, OnInit } from '@angular/core';

import { DragonService } from '../dragon.service';

import { Dragon } from '../dragon';
//import { DRAGONS } from '../mock-dragons';

@Component({
  selector: 'app-dragons',
  templateUrl: './dragons.component.html',
  styleUrls: ['./dragons.component.css']
})
export class DragonsComponent implements OnInit {

  dragons: Dragon[];
  dragon = new Dragon(undefined, '','','','','','','','','','','', false, false, '');
  public show: boolean = false;

  constructor(private dragonService: DragonService) { }

  ngOnInit() {
    this.getDragons();
  }

  getDragons(): void {
    this.dragonService.getDragons()
      .subscribe(dragons => this.dragons = dragons);
  }
//dragonId.value, dragonName.value, gender.value, primaryGene.value, primaryColor.value, secondaryGene.value, secondaryColor.value, 
//tertiaryGene.value, tertiaryColor.value, flight.value, eyeType.value, generationOne.value, breedingPair.value, mate.value
  addDragon():void {
    console.log("Trying to add a Dragon");
    if (!this.dragon) { 
      console.log("We got nothing bro");
      return; }
        this.dragonService.addDragon(this.dragon)
            .subscribe(
            dragon => this.dragon);
  }
  toggle(){
    this.show = !this.show;
  }

}
