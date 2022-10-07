import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AdkarService } from 'src/app/services/adkar.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-counter-controller',
  templateUrl: './counter-controller.component.html',
  styleUrls: ['./counter-controller.component.scss', '../adkar.component.scss'],
})
export class CounterControllerComponent implements OnInit, OnDestroy, OnChanges {
  @Input() count: number;
  @Input() id!: number;
  counter = 0;
  subscribtion!: Subscription;

  constructor(private adkarService: AdkarService, private alertController: AlertController) {
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
  ngOnChanges() {
    this.reset();
  }
  reset() {
    this.counter = this.count;
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
    this.subscribtion.unsubscribe();
  }
}
