import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { AdkarService } from 'src/app/services/adkar.service';
// import { Colors } from 'src/app/helpers';
import { AlertController } from '@ionic/angular';
import { DkerType } from 'src/app/interfaces/idker';


@Component({
  selector: 'app-counter-controller',
  templateUrl: './counter-controller.component.html',
  styleUrls: ['./counter-controller.component.scss', '../adkar.component.scss'],
})
export class CounterControllerComponent implements OnInit, OnDestroy {
  @Input() count: number;
  @Input() id!: string;
  counterName = ""
  counter = 0;
  subscribtion!: Subscription;
  adkarType: DkerType
  constructor(private alertController: AlertController, private adkarService: AdkarService) {
    console.log('\x1b[33mconstructor::: ', this.adkarType);
    // this.adkarType = adkarService.getCurrentAdkarType()
    this.subscribtion = this.adkarService.currentAdkarTypeChange.subscribe(() => {
      this.adkarType = adkarService.getCurrentAdkarType()
      console.log('currentAdkarTypeChange::: ', this.adkarType);
      if (this.id) {
        this.counterName = 'count-' + this.adkarType + this.id
        this.getCounter();
      }
    });

  }

  ngOnInit() {
    console.log('\x1b[34mngOnInit::: ');
    this.getCounter()
  }
  decrease() {
    if (this.counter > 0) {
      this.counter--;
      this.setCounter();
    }
  }
  getCounter() {
    console.log('getCounter');
    
    this.counterName = 'count-' + this.adkarType + this.id
    const countStorage = localStorage.getItem(this.counterName)
    console.log('this.id::: ', this.counterName);
    this.counter = (countStorage) ? +countStorage : this.count;
    console.log('this.counter::: ', this.counter);
  }
  setCounter() {

    localStorage.setItem(this.counterName, (this.counter).toString())
  }
  reset() {
    console.log('reset');

    this.counter = this.count;
    this.setCounter();
  }
  async resetAlertConfirm() {
    const alert = await this.alertController.create({
      message: 'هل تريد اعادة العداد؟',
      buttons: [
        {
          text: 'لا',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
          }
        }, {
          text: 'نعم',
          handler: () => {
            this.reset();
          }
        }
      ]
    });

    await alert.present();
  }
  ngOnDestroy(): void {

  }
}
