import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { AdkarService } from 'src/app/services/adkar.service';

@Component({
  selector: 'app-counter-controller',
  templateUrl: './counter-controller.component.html',
  styleUrls: ['./counter-controller.component.scss', '../adkar.component.scss'],
})
export class CounterControllerComponent implements OnInit, OnDestroy {
  @Input() count: number;
  @Input() id: number;
  counter = 0;
  subscribtion!: Subscription;
  constructor(private adkarService: AdkarService) {
    this.subscribtion = this.adkarService.currentAdkarTypeChange.subscribe(() => {
      this.reset();
    });
  }
  ngOnInit() {
    this.reset();
  }
  decrease() {
    if (this.counter > 0) {
      this.counter--;
    }
  }
  reset() {
    this.counter = this.count;
  }

  ngOnDestroy(): void {
    this.subscribtion.unsubscribe();
  }
}
