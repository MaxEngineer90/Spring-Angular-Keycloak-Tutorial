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
    const url = `${this.base_url}/user`;
    return this.httpClient.get<UserDto>(url).pipe(shareReplay(1));
  }

  getAdmin(): Observable<UserDto> {
    const url = `${this.base_url}/user`;
    return this.httpClient.get<UserDto>(url).pipe(shareReplay(1));
  }
}
