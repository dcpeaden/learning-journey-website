import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbIconModule, NbMenuModule } from '@nebular/theme';
import { MenuLinkComponent } from './menu-link.component';
import { NbEvaIconsModule } from '@nebular/eva-icons';



@NgModule({
  declarations: [MenuLinkComponent],
  imports: [
    CommonModule,
    NbIconModule,
    NbEvaIconsModule,
    NbMenuModule
  ],
  exports: [MenuLinkComponent],
})
export class MenuLinkModule { }
