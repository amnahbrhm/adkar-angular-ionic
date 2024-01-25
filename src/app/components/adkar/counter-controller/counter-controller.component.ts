import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { AdkarService } from 'src/app/services/adkar.service';
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
   
    this.subscribtion = this.adkarService.currentAdkarTypeChange.subscribe(() => {
      this.adkarType = adkarService.getCurrentAdkarType()
      if (this.id) {
        this.counterName = 'count-' + this.adkarType + this.id
        this.getCounter();
      }
    });

  }

  ngOnInit() {
    this.getCounter()
  }
  decrease() {
    if (this.counter > 0) {
      this.counter--;
      this.setCounter();
    }
  }
  getCounter() {
    
    this.counterName = 'count-' + this.adkarType + this.id
    const countStorage = localStorage.getItem(this.counterName)
    this.counter = (countStorage) ? +countStorage : this.count;
  }
  setCounter() {

    localStorage.setItem(this.counterName, (this.counter).toString())
  }
  reset() {

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
