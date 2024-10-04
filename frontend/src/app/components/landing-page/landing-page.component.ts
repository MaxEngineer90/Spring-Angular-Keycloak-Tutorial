import { Component, inject } from '@angular/core';
import { SecurityStore } from '../../../store/security-store';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent {
  #securityStore = inject(SecurityStore);

  signIn(): void {
    this.#securityStore.signIn();
  }
}
