import { Component, inject } from '@angular/core';
import { SecurityStore } from '../../../store/security-store';

@Component({
  selector: 'app-user-keycloak',
  standalone: true,
  imports: [],
  templateUrl: './user-keycloak.component.html',
  styleUrl: './user-keycloak.component.scss',
})
export class UserKeycloakComponent {
  #securityStore = inject(SecurityStore);
  user = this.#securityStore.loadedUser;
}
