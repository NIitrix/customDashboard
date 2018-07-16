import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-show-employees',
  templateUrl: './show-employees.component.html',
  styleUrls: ['./show-employees.component.css']
})
export class ShowEmployeesComponent implements OnInit {
  router: Router;
  constructor(private _router: Router) {
    this.router = _router;
   }

  ngOnInit() {
    console.log('Current Route: ', this.router.url);
    $('#bootstrap-data-table').DataTable({
      lengthMenu: [[10, 20, 50, -1], [10, 20, 50, 'All']],
    });

    $(document).ready(function() {
      $('#bootstrap-data-table-export').DataTable();
    } );
  }

}
