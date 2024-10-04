import {
  computed,
  inject,
  Injectable,
  PLATFORM_ID,
  signal,
} from '@angular/core';
import { isPlatformServer } from '@angular/common';
import { KeycloakService } from '../services/keycloak/keycloak.service';
import { ANONYMOUS_USER, UserProfile } from '../models/user-profile';

@Injectable({ providedIn: 'root' })
export class SecurityStore {
  #keycloakService = inject(KeycloakService);

  loaded = signal(false);
  user = signal<UserProfile | undefined>(undefined);

  loadedUser = computed(() => (this.loaded() ? this.user() : undefined));

  constructor() {
    this.onInit();
  }

  async onInit() {
    const isServer = isPlatformServer(inject(PLATFORM_ID));
    const keycloakService = inject(KeycloakService);
    if (isServer) {
      this.user.set(ANONYMOUS_USER);
      this.loaded.set(true);
      return;
    }

    const isLoggedIn = await keycloakService.init();
    if (isLoggedIn && keycloakService.profile) {
      const { sub, email, given_name, family_name, token, roles } =
        keycloakService.profile;
      const user: UserProfile = {
        sub: sub,
        email,
        given_name: given_name,
        family_name: family_name,
        roles: roles,
        token: token,
        anonymous: false,
      };
      this.user.set(user);
      this.loaded.set(true);
    } else {
      this.user.set(ANONYMOUS_USER);
      this.loaded.set(true);
    }
  }

  async signIn() {
    await this.#keycloakService.login();
  }

  async signOut() {
    await this.#keycloakService.logout();
  }
}
