/* eslint-disable max-len */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Idker, DkerType } from '../interfaces/idker';
import { adker } from './adkar.data';

@Injectable({
  providedIn: 'root'
})
export class AdkarService {

  adker: Idker[];
  currentAdkarType: DkerType = DkerType.morning;
  public currentAdkarTypeChange: BehaviorSubject<DkerType> = new BehaviorSubject<DkerType>(this.currentAdkarType);

  constructor() {
    this.adker = adker;
    this.setTypeOnTime();
  }
  setTypeOnTime(): void {
    const date = new Date();
    if (date.getHours() < 13) {
      this.setCurrentAdkarType(DkerType.morning);
    } else {
      this.setCurrentAdkarType(DkerType.evening);
    }
  }
  setCurrentAdkarType(type: DkerType) {
    this.currentAdkarTypeChange.next(type);
  }
  getCurrentAdkarType(): DkerType {
    return this.currentAdkarType;
  }
  getAdkar(type: DkerType): Idker[] {
    return this.adker.filter((dker) => dker.type.includes(type));
  }

}

