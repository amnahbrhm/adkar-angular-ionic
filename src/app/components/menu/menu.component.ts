import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  public appPages = [
    { title: 'اذكار الصباح', url: '/adkar/morning', icon: 'partly-sunny' },
    { title: 'اذكار المساء', url: '/adkar/evening', icon: 'moon' },

  ];
  constructor() { }
  ngOnInit() { }

}
