import { NgModule } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {CommonModule, registerLocaleData} from '@angular/common';
import en from '@angular/common/locales/en';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import {IonicModule} from '@ionic/angular';
import {ModalModule} from '../modal/modal.module';


registerLocaleData(en);

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    RouterModule,
    ModalModule,
  ],
  providers: [],
})
export class LayoutModule { }
