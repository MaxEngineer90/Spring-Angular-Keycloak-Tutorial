import { Component, inject } from '@angular/core';
import { SecurityStore } from '../../../store/security-store';
import { RoleComponent } from '../role/role.component';

@Component({
  selector: 'app-user-keycloak',
  standalone: true,
  imports: [RoleComponent],
  templateUrl: './user-keycloak.component.html',
  styleUrl: './user-keycloak.component.scss',
})
export class UserKeycloakComponent {
  #securityStore = inject(SecurityStore);
  user = this.#securityStore.loadedUser;
}
