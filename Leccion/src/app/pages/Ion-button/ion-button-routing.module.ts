import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ion-buttonPage } from './ion.button.page';

const routes: Routes = [
  {
    path: '',
    component: ion-button.Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonbuttonPageRoutingModule {}
