import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { TurnosComponent } from './components/turnos/turnos.component';

const routes: Routes = [
  { path: '', component: WelcomePageComponent},
  { path: 'home', component : HomeComponent },
  { path: 'turnos', component: TurnosComponent },
  { path: 'welcome', component: WelcomePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
