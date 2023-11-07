import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ComponentsModule } from '../../components/components.module';

//crear una interface para definir propiedades 

interface Componente {
  icon: string;
  name: string;
  redirectTo: string;
}
@Component({
  selector: 'app-page',
  templateUrl: './page.page.html',
  styleUrls: ['./page.page.scss'],
  })
export class PagePage implements OnInit {
//crear listado
componentes: Componente[] = [
  {
  
   icon: 'american-football-outline',
   name: 'Action Sheet',
   redirectTo: '/action-sheet'
  },
  {
   icon: 'alert-circle-outline',
   name: 'Alert',
   redirectTo: '/alert'
  }
];

constructor(private menuCtrl: MenuController) { }
 ngOnInit() {
}
 mostrarMenu() {
  this.menuCtrl.open('first');
 }
}