import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DkerType, Idker } from 'src/app/interfaces/idker';
import { AdkarService } from 'src/app/services/adkar.service';

@Component({
  selector: 'app-adkar',
  templateUrl: './adkar.component.html',
  styleUrls: ['./adkar.component.scss'],
})
export class AdkarComponent implements OnInit {
  adkar: Idker[];
  title = '';
  adkarType: DkerType;
  dkerList = '';
  constructor(private activateRoute: ActivatedRoute, private adkarService: AdkarService, private router: Router) {
    this.getAdkar();
  }
  ngOnInit() { }
  getAdkar() {
    this.activateRoute.queryParams.subscribe((params) => {
      if (params.type === DkerType.evening) {
        this.adkarType = DkerType.evening;
        this.title = 'أذكار المساء';
      } else if (params.type === DkerType.morning) {
        this.adkarType = DkerType.morning;
        this.title = 'أذكار الصباح';
      } else {
        this.handleWrongNavigation();
      }
      this.adkarService.setCurrentAdkarType(this.adkarType);
      this.adkar = this.adkarService.getAdkar(this.adkarType);
    });
  }
  handleWrongNavigation() {
    this.router.navigate(['adkar'], { queryParams: { type: 'morning' } },
    );
  }
}
