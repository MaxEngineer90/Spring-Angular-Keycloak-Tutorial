import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import {
  provideHttpClient,
  withFetch,
  withInterceptors,
} from '@angular/common/http';
import { securityInterceptor } from '../interceptor/scurity.interceptor';
import { Configuration } from '../config/configuration';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding()),
    provideClientHydration(),
    provideHttpClient(withInterceptors([securityInterceptor]), withFetch()),
    {
      provide: Configuration,
      useValue: new Configuration(
        'http://localhost:8080/api/v1/greetings/greet/user',
      ),
    },
  ],
};
