import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { DataTableDataSource, DataTableItem } from './table-data-source';
import "@ui5/webcomponents/dist/Table.js";
import "@ui5/webcomponents/dist/TableColumn.js";
import "@ui5/webcomponents/dist/TableRow.js";
import "@ui5/webcomponents/dist/TableCell.js";
import { Finding } from '@shared/models/finding.model';
import { FindingService } from '../finding-management/finding.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  // @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ViewChild(MatSort) sort: MatSort;
  // @ViewChild(MatTable) table: MatTable<DataTableItem>;
  dataSource: DataTableDataSource;

  finding: Finding [];

  constructor(private findingService: FindingService){

  }

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['scientific_type', 'author', 'characteristic', 'location_name', 'coordinate_x', 'coordinate_y', 'altitude', 'tolerance', 'region', 'date_of_creation', 'observer', 'quantity', 'source_of_origin', 'genus', 'species' ];

  ngOnInit() {
    this.dataSource = new DataTableDataSource();

    this.findingService.searchAll().subscribe(x=>{
      console.log("THIS VALUE:",x);
      this.finding = x;
  })

  // ngAfterViewInit() {
  //   this.dataSource.sort = this.sort;
  //   this.dataSource.paginator = this.paginator;
  //   this.table.dataSource = this.dataSource;
  // }
  }
}
