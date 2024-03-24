import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SecurityStore } from '../store/security-store';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { map, Observable, shareReplay } from 'rxjs';
import { GreetingDto } from '../models/greeting-dto';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, JsonPipe, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'frontend';
  #securityStore = inject(SecurityStore);
  user = this.#securityStore.loadedUser;
  message$!: Observable<string>;
  private readonly httpClient = inject(HttpClient);
  private readonly base_url = 'http://localhost:8080/api/v1/greetings/greet';

  ngOnInit() {
    this.message$ = this.getGreetingMessage();
  }

  signOut() {
    this.#securityStore.signOut();
  }

  signIn() {
    this.#securityStore.signIn();
  }

  getGreetingMessage(): Observable<string> {
    return this.httpClient.get<GreetingDto>(this.base_url).pipe(
      map((greetingDto) => greetingDto.message),
      shareReplay(),
    );
  }
}
