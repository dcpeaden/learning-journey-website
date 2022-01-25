import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbIconModule } from '@nebular/theme';
import { MenuLinkComponent } from './menu-link.component';
import { NbEvaIconsModule } from '@nebular/eva-icons';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NbIconModule,
    NbEvaIconsModule,
  ],
  exports: [MenuLinkComponent],
})
export class MenuLinkModule { }
