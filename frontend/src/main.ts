import {bootstrapApplication} from '@angular/platform-browser';
import {AppComponent} from './app/app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {SecurityInterceptor} from "./interceptor/scurity.interceptor";

bootstrapApplication(AppComponent, {
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: SecurityInterceptor, multi: true},
    HttpClientModule
  ]
}).catch(err => console.error(err));
