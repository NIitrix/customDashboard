import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-products-inventory',
  templateUrl: './products-inventory.component.html',
  styleUrls: ['./products-inventory.component.css']
})
export class ProductsInventoryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('#bootstrap-data-table').DataTable({
      lengthMenu: [[5, 10, 15, 30, 50, -1], [5, 10, 15, 30, 50, 'All']],
    });

    $(document).ready(function() {
      console.log('Executing from ts for inventory...!!!');
      $('#bootstrap-data-table-export').DataTable();
    } );
  }

}
