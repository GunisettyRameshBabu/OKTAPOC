import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenService implements HttpInterceptor {
  accessToken: string;

  constructor() { }

  getAccessToken() {
    if (localStorage.getItem('okta-token-storage')) {
      var token = JSON.parse(localStorage.getItem('okta-token-storage'))
    this.accessToken = 'Bearer ' + token.accessToken.accessToken;
    }
    
  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.getAccessToken();
    req = req.clone({
      setHeaders: {
        Authorization: this.accessToken,
      },
    });
    return next.handle(req);
  }
 
}
