import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private service: ApiService) { }
  tabs;
  links;
  ngOnInit() {
    this.service.getUserTabs().subscribe((res: any) => {
      this.tabs = res;
      console.log(res);
    });
    this.service.getAppLinks().subscribe((res: any) => {
      this.links = res;
      console.log(res);
    });
  }

}
