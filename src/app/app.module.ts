import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MenuComponent } from './components/menu/menu.component';
import { EveningAdkarComponent } from './components/adkar/evening-adkar/evening-adkar.component';
import { MorningAdkarComponent } from './components/adkar/morning-adkar/morning-adkar.component';
import { CounterControllerComponent } from './components/adkar/counter-controller/counter-controller.component';
@NgModule({
  declarations: [AppComponent,MenuComponent,EveningAdkarComponent,MorningAdkarComponent,CounterControllerComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
