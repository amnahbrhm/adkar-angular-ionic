import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-counter-view',
  templateUrl: './counter-view.component.html',
  styleUrls: ['./counter-view.component.scss'],
})
export class CounterViewComponent implements OnInit {
  counter = 0;
  constructor(private alertController: AlertController) { }

  ngOnInit() {
    const countStorage = localStorage.getItem("count")
    this.counter = (countStorage)?+countStorage:0
  }
  increase(){
    this.counter++;
    localStorage.setItem("count",(this.counter).toString())
  }
  reset() {
    this.counter = 0
    localStorage.setItem("count",(this.counter).toString())
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
  
}
