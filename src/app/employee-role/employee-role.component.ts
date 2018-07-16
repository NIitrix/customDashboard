import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-employee-role',
  templateUrl: './employee-role.component.html',
  styleUrls: ['./employee-role.component.css']
})
export class EmployeeRoleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('#bootstrap-data-table').DataTable({
      lengthMenu: [[10, 20, 50, -1], [10, 20, 50, 'All']],
    });

    $(document).ready(function() {
      console.log('Executing from ts...!!!');
      $('#bootstrap-data-table-export').DataTable();
    } );
  }

}
