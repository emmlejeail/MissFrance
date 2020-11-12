import { Component, OnInit } from '@angular/core';
import { MISSES } from '../mock-misses';

@Component({
  selector: 'app-misses',
  templateUrl: './misses.component.html',
  styleUrls: ['./misses.component.css']
})
export class MissesComponent implements OnInit {

  misses = MISSES;

  constructor() { }

  ngOnInit() {
  }

}
