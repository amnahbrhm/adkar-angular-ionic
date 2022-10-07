import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter-view',
  templateUrl: './counter-view.component.html',
  styleUrls: ['./counter-view.component.scss'],
})
export class CounterViewComponent implements OnInit {
  counter = 3;
  constructor() { }

  ngOnInit() {}
  counterChange(num){
    this.counter = +num;
  }
}
