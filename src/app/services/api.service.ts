import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getUserTabs(accessToken) {
    return this.http.get(environment.apiUrl + "users/me/home/tabs", {withCredentials: true , headers: {Authorization: 'Bearer ' + accessToken}});
  }

  getAppLinks(accessToken) {
    return this.http.get(environment.apiUrl + "users/me/appLinks", {withCredentials: true , headers: {Authorization: 'Bearer ' + accessToken} });
  }
}
