import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ResumePageComponent } from './resume-page/resume-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'resume', component: ResumePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
