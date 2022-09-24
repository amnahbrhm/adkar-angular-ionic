import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter-controller',
  templateUrl: './counter-controller.component.html',
  styleUrls: ['./counter-controller.component.scss','../morning-adkar/morning-adkar.component.scss'],
})
export class CounterControllerComponent implements OnInit {
  @Input() count: number;
  constructor() { }

  ngOnInit() { }

}
