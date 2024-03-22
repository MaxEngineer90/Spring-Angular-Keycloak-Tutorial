import {Component, inject} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {SecurityStore} from "../store/security-store";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Observable, shareReplay} from "rxjs";
import {AsyncPipe, JsonPipe} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, JsonPipe, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'frontend';
  #securityStore = inject(SecurityStore);
  user = this.#securityStore.loadedUser;

  private readonly base_url = 'http://localhost:8080/api/v1/greetings/greet';
  private readonly http = inject(HttpClient);

  signOut() {
    this.#securityStore.signOut();
  }

  signIn() {
    this.#securityStore.signIn();
  }

  getGreetingMessage(): Observable<string> {
    return this.http.get<string>(this.base_url).pipe(shareReplay());
  }
}
