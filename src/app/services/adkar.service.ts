/* eslint-disable max-len */
import { Injectable } from '@angular/core';
import { Idker, DkerType } from '../interfaces/idker';

@Injectable({
  providedIn: 'root'
})
export class AdkarService {

  adker: Idker[] = [
    {
      text: `أَعُوذُ بِاللهِ مِنْ الشَّيْطَانِ الرَّجِيمِ
      اللّهُ لاَ إِلَـهَ إِلاَّ هُوَ الْحَيُّ الْقَيُّومُ لاَ تَأْخُذُهُ سِنَةٌ وَلاَ نَوْمٌ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الأَرْضِ مَن ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلاَّ بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلاَ يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلاَّ بِمَا شَاء وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالأَرْضَ وَلاَ يَؤُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ.`,
      count: 1,
      type: [DkerType.evening, DkerType.morning]
    },
    {
      text: `بِسْمِ اللهِ الرَّحْمنِ الرَّحِيم
      قُلْ هُوَ ٱللَّهُ أَحَدٌ، ٱللَّهُ ٱلصَّمَدُ، لَمْ يَلِدْ وَلَمْ يُولَدْ، وَلَمْ يَكُن لَّهُۥ كُفُوًا أَحَدٌۢ.
      من قالها حين يصبح وحين يمسى كفته من كل شىء (الإخلاص والمعوذتين). `,
      count: 3,
      type: [DkerType.evening,DkerType.morning ]
    },
  ];
  constructor() { }

  getAdkar(type: DkerType): Idker[] {
    return this.adker.filter((dker)=>dker.type.includes(type));
  }

}

