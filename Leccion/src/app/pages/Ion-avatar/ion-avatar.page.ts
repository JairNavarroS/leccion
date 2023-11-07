import { Component, OnInit } from '@angular/core';
import { IonAvatarController } from '@ionic/angular';

@Component({
  selector: 'app-ion-avatar',
  templateUrl: './ion-avatar.page.html',
  styleUrls: ['./ion-avatar.page.scss'],
})
export class ActionSheetPage implements OnInit {
  presentionavatar: any;
  constructor(private IonavatarCtrl: ActionSheetController) { }
  

  ngOnInit() {
  }

  onClick() {
    this.presentionavatar();
  }
  //.actionSheetController.create
  async presentActionSheet() {
  const ionavatar = await this.ionavatarCtrl.create({
   header: 'Albumnes',
   backdropDismiss: false, //significa que no se puede cerrar, cunado se hace clic afuera del entorno
   cssClass: 'my-custom-class',
   buttons: [{
    text: 'Delete',
    role: 'destructive',
    icon: 'trash-outline',
    cssClass: 'rojo',
    id: 'delete-button',
    data: {
    type: 'delete'
    },
    handler: () => {
    console.log('Delete clicked');
    }
    }, {
    text: 'Share',
    icon: 'share-outline',
    data: 10,
    handler: () => {
    console.log('Share clicked');
    }
    }, {
    text: 'Play (open modal)',
    icon: 'caret-forward-circle-outline',
    data: 'Data value',
    handler: () => {
    console.log('Play clicked');
    }
    }, {
    text: 'Save',
    icon: 'heart-outline',
    handler: () => {
    console.log('Save clicked');
    }
    }, {
    text: 'Cancel',
    icon: 'close-outline',
    role: 'cancel',
    handler: () => {
    console.log('Cancel clicked');
    }
    }]
    });
    await ionavatar.present();
    const { role, data } = await ionavatar.onDidDismiss();
    console.log('onDidDismiss resolved with role and data', role, data);
  }

}





