import { Component } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';  // Ajusta la ruta según tu estructura

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthenticationService]
  
})
export class AppComponent {
  title = 'consultorio';
  
  constructor(public authService: AuthenticationService) {}

  get isLoggedIn(): boolean {
    return this.authService.isAuthenticatedUser();
  }
}
