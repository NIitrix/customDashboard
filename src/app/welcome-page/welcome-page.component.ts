import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit {

  constructor() { }
  currentHour: any;
  ngOnInit() {
    this.currentHour = new Date();
    this.currentHour = this.currentHour.getHours() + ':' + this.currentHour.getMinutes() + ':' + this.currentHour.getSeconds();
  }

}
