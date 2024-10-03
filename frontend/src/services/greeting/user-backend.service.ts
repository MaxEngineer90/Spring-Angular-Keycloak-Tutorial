import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, shareReplay } from 'rxjs';
import { Configuration } from '../../config/configuration';
import { UserDto } from '../../models/user-dto';

@Injectable({
  providedIn: 'root',
})
export class UserBackendService {
  private readonly httpClient = inject(HttpClient);
  private readonly base_url = inject(Configuration).baseUrl;

  getUser(): Observable<UserDto> {
    return this.httpClient.get<UserDto>(this.base_url).pipe(shareReplay(1));
  }
}
