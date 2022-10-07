import { Component, OnInit } from '@angular/core';
import { DkerType } from 'src/app/interfaces/idker';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  public adkarList = [
    { title: 'اذكار الصباح', queryParams: { type: DkerType.morning }, icon: 'partly-sunny' },
    { title: 'اذكار المساء', queryParams: { type: DkerType.evening }, icon: 'moon' },
    { title: 'اذكار مابعد الصلاة', queryParams: { type: DkerType.afterPrayers }, icon: 'person' },
    { title: 'اذكار النوم', queryParams: { type: DkerType.sleep }, icon: 'bed' },
  ];
  otherList = [
    { title: 'العداد', url: 'counter', },

  ];
  constructor() { }
  ngOnInit() { }

}
