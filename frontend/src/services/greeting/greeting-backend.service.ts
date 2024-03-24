import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, shareReplay } from 'rxjs';
import { Configuration } from '../../config/configuration';
import { GreetingDto } from '../../models/greeting-dto';

@Injectable({
  providedIn: 'root',
})
export class GreetingBackendService {
  private readonly httpClient = inject(HttpClient);
  private readonly base_url = inject(Configuration).baseUrl;

  getGreetingMessage(): Observable<string> {
    return this.httpClient.get<GreetingDto>(this.base_url).pipe(
      map((greetingDto) => greetingDto.message),
      shareReplay(1),
    );
  }
}
