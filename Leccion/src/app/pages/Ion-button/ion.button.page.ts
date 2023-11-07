import { Component, OnInit } from '@angular/core';
import { AlertController, IonButton } from '@ionic/angular';

@Component({
  selector: 'app-button',
  templateUrl: './button.page.html',
  styleUrls: ['./button.page.scss'],
})
export class buttonPage implements OnInit {
  handlerMessage = '';
  roleMessage = '';



  ngOnInit() {
  }

  async presentButton() {
    const Ionicbutton = await this.presentButtonMultilpeButtonActionCtrl.create({
    backdropDismiss: false,
    header: 'button',
    subHeader: 'Important message',
    message: 'This is a button',
    buttons: ['OK']
    });
    await alert.present();
  };

  async presentAlertMultilpeButton() {
    const IonButton = await this.alertCtrl.create({
    backdropDismiss: false,
    header: 'Button',
    subHeader: 'Important message',
    message: 'This is an alert!',
    buttons: ['Clear', 'Outline', 'Default']
    });
    await IonButton.present();
  };
  

  async presentButtonMultilpeButtonAction() {
    const alert = await this.ionbuttonCtrl.create({
    backdropDismiss: false,
    header: 'Button',
    subHeader: 'Important message',
    message: 'This is a button',
    buttons: [
    {
      text: 'OK!',
      handler: () => {
       console.log('Click en OK!')
    }
    },
    /*
    {
    text: 'Clear',
    handler: () => {
    console.log('Click en Clear')
    }
  },
  */
     {
       text: 'Clear',
       role: 'Clear',
       cssClass: 'rojo'
      }
    ]
  });
  await IonButton.present();
  };
}

    




