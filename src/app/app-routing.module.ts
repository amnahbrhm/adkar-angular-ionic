import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { EveningAdkarComponent } from './components/adkar/evening-adkar/evening-adkar.component';
import { MorningAdkarComponent } from './components/adkar/morning-adkar/morning-adkar.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'adkar/morning',
    pathMatch: 'full'
  },
  {
    path: 'adkar/morning',
    component: MorningAdkarComponent
  },
  {
    path: 'adkar/evening',
    component: EveningAdkarComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
