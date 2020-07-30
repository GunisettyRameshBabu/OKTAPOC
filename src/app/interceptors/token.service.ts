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
    this.accessToken = 'Bearer eyJraWQiOiJsczJEX0pxZGowc3RkSzlHQ3dBTHlkN3B1a050TUlydXpnQ1JTdlAzVC1NIiwiYWxnIjoiUlMyNTYifQ.eyJ2ZXIiOjEsImp0aSI6IkFULjlxNXVLTU4yYld2Y3BTeTBvZzMzSHBzVnk1NGxYQ0VNRHFZd0pZVzR3aEUiLCJpc3MiOiJodHRwczovL2Rldi04ODE2MTUub2t0YXByZXZpZXcuY29tL29hdXRoMi9kZWZhdWx0IiwiYXVkIjoiYXBpOi8vemVla2hvbyIsImlhdCI6MTU3MjA0MjMxOSwiZXhwIjoxNTcyMDQ1OTE5LCJjaWQiOiIwb2Fuc2EyMDB3WHFzWWQ0STBoNyIsInVpZCI6IjAwdTZoeXZwYTUwcXF5T2hVMGg3Iiwic2NwIjpbIm9wZW5pZCIsInByb2ZpbGUiLCJlbWFpbCJdLCJzdWIiOiJ6ZWUua2hvb0Bva3RhLmNvbSIsImdyb3VwcyI6WyJFdmVyeW9uZSIsIkNvbXBhbnlBZG1pbiIsIkRlbW9DbGllbnQgVXNlcnMiLCJTZW5zaXRpdmUgVHJhbnNhY3Rpb25zIl19.N3V5czILkYD5DblryrTQStxN13Hs2FI94vT1F_2hRqt8X-9JbY7OM-w_DS0NQ-sSLP-0iji0TMN0sRtJp5z2WhcfkqOVwIQlGBMi8OWNASGYHJQaonoNceK5GRlZEI9YRHmmq44cwQ7SbOM3GBtTNOluYeOedz0WzqIi52wbcTkODTXG24wTDcM047KXgCcCC8s2BEpC-xeP4ZYadsokwHbr_8UBCH_6FVdIFmANlCgZ-_-pBmrE06rtf4Giyn5vpl7Gh4EIpTR93ABKFRFyZfTSF9twVDPbOvufPtpy_xh6h0SA-B_KcIiPWacIav3BEJ2vhTWxFTR41NoI21k-2g' ;
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