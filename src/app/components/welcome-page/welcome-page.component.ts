import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css'],
  styles: [`
    :host {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      width: 100%;
      background-image: url('/assets/login-background.png');
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
    }
  `]
})
export class WelcomePageComponent {
  
  constructor(private router: Router, private authService: AuthenticationService) {}

  get isLoggedIn(): boolean {
    return this.authService.isAuthenticatedUser();
  }

  login() {
    this.authService.login();
    this.router.navigate(['/home']);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/welcome']);
  }
}


