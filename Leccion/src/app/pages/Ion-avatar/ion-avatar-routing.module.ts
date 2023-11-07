import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonavatarPage } from './ion-avatar.page';

const routes: Routes = [
  {
    path: '',
    component: Ion-avatarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActionSheetPageRoutingModule {}
