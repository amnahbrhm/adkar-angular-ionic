import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AdkarComponent } from './components/adkar/adkar.component';
import { CounterViewComponent } from './components/counter-view/counter-view.component';

const routes: Routes = [
  {
    path: 'adkar',
    component: AdkarComponent
  },
  {
    path: 'counter',
    component: CounterViewComponent
  },
  { path: '**', redirectTo: 'adkar?type=morning', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
