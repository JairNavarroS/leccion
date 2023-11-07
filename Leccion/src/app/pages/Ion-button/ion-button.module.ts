import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonButton, IonicModule } from '@ionic/angular';

import { ion-button.RoutingModule } from './ion-button-routing.module';

import { Ion-button} from './ion.button.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonbuttonPageModule
  ],
  _declarations: [IonButton.Page],
  get declarations() {
    return this._declarations;
  },
  set declarations(value) {
    this._declarations = value;
  },
})
 export class IonbuttonPageModule {

 
}