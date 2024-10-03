import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SecurityStore } from '../store/security-store';
import { AsyncPipe } from '@angular/common';
import { UserBackendComponent } from './components/user-backend/user-backend.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsyncPipe, UserBackendComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  #securityStore = inject(SecurityStore);

  user = this.#securityStore.loadedUser;

  signOut(): void {
    this.#securityStore.signOut();
  }

  signIn(): void {
    this.#securityStore.signIn();
  }
}
