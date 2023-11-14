import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { HeaderComponent } from './components/header/header.component';
// import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { TurnosComponent } from './components/turnos/turnos.component';

const routes: Routes = [
  { path: '', component: WelcomePageComponent},
  { path: 'home', component : HomeComponent },
  // { path: 'Header', component : HeaderComponent},
  // { path: 'footer', component : FooterComponent},
  { path: 'Welcome', component : WelcomePageComponent},
  { path: 'turnos', component : TurnosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
