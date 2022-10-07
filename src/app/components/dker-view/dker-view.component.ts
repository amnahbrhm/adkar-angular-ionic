import { Component, Input, OnInit } from '@angular/core';
import { Idker } from 'src/app/interfaces/idker';

@Component({
  selector: 'app-dker-view',
  templateUrl: './dker-view.component.html',
  styleUrls: ['./dker-view.component.scss'],
})
export class DkerViewComponent implements OnInit {
  @Input() dker: Idker;
  @Input() i: number;
  constructor() {
  }

  ngOnInit() { }

}
