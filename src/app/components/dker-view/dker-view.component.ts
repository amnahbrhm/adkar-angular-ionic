import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Idker } from 'src/app/interfaces/idker';
import { CounterControllerComponent } from '../adkar/counter-controller/counter-controller.component';

@Component({
  selector: 'app-dker-view',
  templateUrl: './dker-view.component.html',
  styleUrls: ['./dker-view.component.scss'],
})
export class DkerViewComponent implements OnInit {
  @Input() dker: Idker;
  @Input() i: number;
  @ViewChild(CounterControllerComponent) counterControllerComponent!: CounterControllerComponent
  constructor() {
  }
  getSavedCounters(){
    this.counterControllerComponent.getCounter()
  }
  resetCounter(){
    this.counterControllerComponent.reset()
  }
  ngOnInit() { }

}
