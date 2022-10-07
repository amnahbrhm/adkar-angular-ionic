import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MenuComponent } from './components/menu/menu.component';

import { CounterControllerComponent } from './components/adkar/counter-controller/counter-controller.component';
import { AdkarComponent } from './components/adkar/adkar.component';
import { FormsModule } from '@angular/forms';
import { DkerViewComponent } from './components/dker-view/dker-view.component';
@NgModule({
  declarations: [AppComponent,MenuComponent,CounterControllerComponent,AdkarComponent,DkerViewComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,FormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
