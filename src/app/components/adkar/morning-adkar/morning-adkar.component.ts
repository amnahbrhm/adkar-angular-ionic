import { Component, OnInit } from '@angular/core';
import { DkerType, Idker } from 'src/app/interfaces/idker';
import { AdkarService } from 'src/app/services/adkar.service';

@Component({
  selector: 'app-morning-adkar',
  templateUrl: './morning-adkar.component.html',
  styleUrls: ['./morning-adkar.component.scss'],
})
export class MorningAdkarComponent implements OnInit {
  adkar: Idker[];
  constructor(private adkarService: AdkarService) {
    this.adkar = adkarService.getAdkar(DkerType.morning);
  }

  ngOnInit() { }

}
