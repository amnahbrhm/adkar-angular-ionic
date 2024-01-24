import { Component, OnChanges, OnInit, QueryList, SimpleChanges, ViewChildren } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DkerType, Idker } from 'src/app/interfaces/idker';
import { AdkarService } from 'src/app/services/adkar.service';
import { DkerViewComponent } from '../dker-view/dker-view.component';

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
  @ViewChildren(DkerViewComponent) dkerViewComponents!: QueryList<DkerViewComponent>

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
      } else if (params.type === DkerType.afterPrayers) {
        this.adkarType = DkerType.afterPrayers;
        this.title = 'أذكار مابعد الصلاة';
      } else if (params.type === DkerType.sleep) {
        this.adkarType = DkerType.sleep;
        this.title = 'أذكار النوم';
      }else {
        this.handleWrongNavigation();
      }
      this.adkarService.setCurrentAdkarType(this.adkarType);
      console.log('this.adkarType::: ', this.adkarType);
      if(this.dkerViewComponents)
      this.dkerViewComponents.forEach(dkerView=>{
        dkerView.getSavedCounters()
      })
      this.adkar = []
      this.adkar = this.adkarService.getAdkar(this.adkarType);
    });
  }
  resetCounters(){
    this.dkerViewComponents.forEach(dkerView=>{
      dkerView.resetCounter()
    })
  }
  handleWrongNavigation() {
    this.adkarType = this.adkarService.getCurrentAdkarType();
    this.router.navigate(['adkar'], { queryParams: { type: this.adkarType } },
    );
  }
}
