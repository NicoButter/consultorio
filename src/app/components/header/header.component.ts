import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private router: Router, private authService: AuthenticationService) {}

  navigateToTurnos() {
    this.router.navigate(['/turnos']);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/welcome']);
  }

}
