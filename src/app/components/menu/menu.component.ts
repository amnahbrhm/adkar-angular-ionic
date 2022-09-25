import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  public appPages = [
    { title: 'اذكار الصباح', queryParams: { type: 'morning'}, icon: 'partly-sunny' },
    { title: 'اذكار المساء', queryParams: { type: 'evening'}, icon: 'moon' },

  ];
  constructor() { }
  ngOnInit() { }

}
