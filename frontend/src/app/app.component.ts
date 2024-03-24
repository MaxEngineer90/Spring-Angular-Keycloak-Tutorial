import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SecurityStore } from '../store/security-store';
import { AsyncPipe } from '@angular/common';
import { GreetingBackendService } from '../services/greeting/greeting-backend.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'frontend';
  #securityStore = inject(SecurityStore);
  user = this.#securityStore.loadedUser;
  message$!: Observable<string>;
  private readonly greetingService = inject(GreetingBackendService);

  ngOnInit() {
    this.message$ = this.greetingService.getGreetingMessage();
  }

  signOut() {
    this.#securityStore.signOut();
  }

  signIn() {
    this.#securityStore.signIn();
  }
}
