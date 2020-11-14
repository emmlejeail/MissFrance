import { Component, OnInit } from '@angular/core';
import { MISSES } from '../mock-misses';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { StorageDBService } from "../shared/storage-db.service";

@Component({
  selector: 'app-misses',
  templateUrl: './misses.component.html',
  styleUrls: ['./misses.component.css']
})
export class MissesComponent implements OnInit {

  missesPreviousRound = MISSES;

  missesNextRound = [];

  constructor(private storageDBservice: StorageDBService) { }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
    console.log(this.missesNextRound)
  }

  missFirestore;   
  getMissFromFirestore = () =>
      this.storageDBservice
      .getMissFromFirestore()
      .subscribe(res =>(this.missFirestore = res));

  ngOnInit() {
    this.getMissFromFirestore();
  }

}
