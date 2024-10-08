import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SecurityStore } from '../store/security-store';
import { AsyncPipe } from '@angular/common';
import { UserBackendComponent } from './components/user-backend/user-backend.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { UserKeycloakComponent } from './components/user-keycloak/user-keycloak.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    AsyncPipe,
    UserBackendComponent,
    LandingPageComponent,
    UserKeycloakComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  #securityStore = inject(SecurityStore);

  showKeycloakUser = true;
  user = this.#securityStore.loadedUser;

  signOut(): void {
    this.#securityStore.signOut();
  }

  toggleUserView() {
    this.showKeycloakUser = !this.showKeycloakUser;
  }
}
