import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { NbButtonModule } from '@nebular/theme';



@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    NbButtonModule,
  ],
  exports: [HomePageComponent]
})
export class HomePageModule { }
