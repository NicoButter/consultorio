import { Component, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

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
  
  constructor(private router: Router) {}

  login() {

    this.router.navigate(['/home']);

  }
}


