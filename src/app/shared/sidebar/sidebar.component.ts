import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  openEmployeMenu: boolean;
  currentRoute: any;
  route: Router;
  constructor(private _router: Router) {
    this.route = _router;
   }

  ngOnInit() {
    console.log('Side bar Current Route: ', this.route.url);
    this.currentRoute = this.route.url;
  }

}
