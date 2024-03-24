import {SecurityStore} from "../store/security-store";
import {inject, Injectable} from "@angular/core";
import {HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SecurityInterceptor implements HttpInterceptor {

  private securityStore = inject(SecurityStore)

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const bearer = this.securityStore.user()?.bearer;
    if (!bearer) {
      return next.handle(req);
    }

    const authReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${bearer}`),
    });

    return next.handle(authReq);
  }
}
