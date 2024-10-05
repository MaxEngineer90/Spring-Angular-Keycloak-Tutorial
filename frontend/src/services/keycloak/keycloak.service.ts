import { Injectable } from '@angular/core';
import { UserProfile } from '../../models/user-profile';
import Keycloak from 'keycloak-js';

@Injectable({
  providedIn: 'root',
})
export class KeycloakService {
  _keycloak: Keycloak | undefined;
  profile: UserProfile | undefined;

  get keycloak() {
    if (!this._keycloak) {
      this._keycloak = new Keycloak({
        url: 'http://localhost',
        realm: 'eternal',
        clientId: 'eternal_frontend',
      });
    }
    return this._keycloak;
  }

  async init() {
    const authenticated = await this.keycloak.init({
      onLoad: 'check-sso',
      silentCheckSsoRedirectUri:
        window.location.origin + '/assets/silent-check-sso.html',
    });

    if (!authenticated) {
      return authenticated;
    }

    // Token abrufen und dekodieren
    const token = this.keycloak.token || '';
    const decodedToken = this.decodeToken(token);

    // Rollen aus dem Token extrahieren
    const roles = decodedToken?.resource_access?.eternal_frontend?.roles || [];

    // UserProfile mit den ausgelesenen Daten befüllen
    this.profile = {
      sub: decodedToken.sub,
      email: decodedToken.email,
      given_name: decodedToken.given_name,
      family_name: decodedToken.family_name,
      roles: roles,
      token: token,
    };

    return true;
  }

  login(): Promise<void> {
    return this.keycloak.login();
  }

  logout(): Promise<void> {
    return this.keycloak.logout();
  }

  private decodeToken(token: string): any {
    if (!token) {
      return null;
    }

    const parts = token.split('.');
    if (parts.length !== 3) {
      return null;
    }

    const payload = atob(parts[1]);
    return JSON.parse(payload);
  }
}
