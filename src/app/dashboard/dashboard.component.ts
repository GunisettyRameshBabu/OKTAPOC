import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { OktaAuthService } from '@okta/okta-angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  accessToken: any;

  constructor(private service: ApiService,public oktaAuth: OktaAuthService) { }
  tabs;
  links;
  ngOnInit() {
    this.oktaAuth.getAccessToken().then((res:any )=> {
      this.accessToken = res;
    });
    setTimeout(() => {
      this.service.getUserTabs(this.accessToken).subscribe((res: any) => {
        this.tabs = res;
      });
      this.service.getAppLinks(this.accessToken).subscribe((res: any) => {
        this.links = res;
      });
    }, 2000);
   
  }

}
