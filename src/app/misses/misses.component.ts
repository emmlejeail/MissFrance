import { Component, OnInit } from '@angular/core';
import { MISSES } from '../mock-misses';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-misses',
  templateUrl: './misses.component.html',
  styleUrls: ['./misses.component.css']
})
export class MissesComponent implements OnInit {

  missesPreviousRound = MISSES;

  missesNextRound = [];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
