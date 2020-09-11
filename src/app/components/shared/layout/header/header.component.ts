import { Component, OnInit } from '@angular/core';
import {MenuController, ModalController} from '@ionic/angular';
import {MenuComponent} from '../../modal/menu/menu.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  responsive: boolean = false;

  constructor(public modalController: ModalController,) { }

  ngOnInit() {}

  async menuModal() {
    const modal = await this.modalController.create({
      component: MenuComponent,
      cssClass: 'menuModal',
    });
    return await modal.present();
  }

}
