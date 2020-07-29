import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getUserTabs() {
    return this.http.get(environment.apiUrl + "users/me/home/tabs", {withCredentials: true});
  }

  getAppLinks() {
    return this.http.get(environment.apiUrl + "users/me/appLinks", {withCredentials: true});
  }
}
