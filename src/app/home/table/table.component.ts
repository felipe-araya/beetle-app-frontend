import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { DataTableDataSource} from './table-data-source';
import "@ui5/webcomponents/dist/Table.js";
import "@ui5/webcomponents/dist/TableColumn.js";
import "@ui5/webcomponents/dist/TableRow.js";
import "@ui5/webcomponents/dist/TableCell.js";
import { Finding } from '@shared/models/finding.model';
import { FindingService } from '../finding-management/finding.service';

export interface DataTableItem {
  scientific_type: string;
  author: string;
  characteristic: string;
  location_name: string;
  coordinate_x: number;
  coordinate_y: number;
  altitude: number;
  tolerance: number;
  region: string;
  date_of_creation: string;
  observer: string;
  quantity: number;
  source_of_origin: string;
  genus: string;
  species: string;

}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: DataTableItem[] = [
  {scientific_type: 'coco', author: 'Hydrogen', characteristic: 'hola', location_name:'arica', coordinate_x: 3, coordinate_y: 4, altitude: 3, tolerance: 3, region:'D-Mecklenburg-Vorpommern', date_of_creation: '03.04.2020', observer:'Meitzner,V.', quantity: 1, source_of_origin:'Alte Datenbank Müller-Motzfeld', genus: 'Leistus', species:'terminatus'},
  {scientific_type: 'coco', author: 'Hydrogen', characteristic: 'hola', location_name:'arica', coordinate_x: 3, coordinate_y: 4, altitude: 3, tolerance: 3, region:'D-Mecklenburg-Vorpommern', date_of_creation: '03.04.2020', observer:'Meitzner,V.', quantity: 1, source_of_origin:'Alte Datenbank Müller-Motzfeld', genus: 'Leistus', species:'terminatus'},
  {scientific_type: 'coco', author: 'Hydrogen', characteristic: 'hola', location_name:'arica', coordinate_x: 3, coordinate_y: 4, altitude: 3, tolerance: 3, region:'D-Mecklenburg-Vorpommern', date_of_creation: '03.04.2020', observer:'Meitzner,V.', quantity: 1, source_of_origin:'Alte Datenbank Müller-Motzfeld', genus: 'Leistus', species:'terminatus'},
  {scientific_type: 'coco', author: 'Hydrogen', characteristic: 'hola', location_name:'arica', coordinate_x: 3, coordinate_y: 4, altitude: 3, tolerance: 3, region:'D-Mecklenburg-Vorpommern', date_of_creation: '03.04.2020', observer:'Meitzner,V.', quantity: 1, source_of_origin:'Alte Datenbank Müller-Motzfeld', genus: 'Leistus', species:'terminatus'},
  {scientific_type: 'coco', author: 'Hydrogen', characteristic: 'hola', location_name:'arica', coordinate_x: 3, coordinate_y: 4, altitude: 3, tolerance: 3, region:'D-Mecklenburg-Vorpommern', date_of_creation: '03.04.2020', observer:'Meitzner,V.', quantity: 1, source_of_origin:'Alte Datenbank Müller-Motzfeld', genus: 'Leistus', species:'terminatus'},
  {scientific_type: 'coco', author: 'Hydrogen', characteristic: 'hola', location_name:'arica', coordinate_x: 3, coordinate_y: 4, altitude: 3, tolerance: 3, region:'D-Mecklenburg-Vorpommern', date_of_creation: '03.04.2020', observer:'Meitzner,V.', quantity: 1, source_of_origin:'Alte Datenbank Müller-Motzfeld', genus: 'Leistus', species:'terminatus'},
  {scientific_type: 'coco', author: 'Hydrogen', characteristic: 'hola', location_name:'arica', coordinate_x: 3, coordinate_y: 4, altitude: 3, tolerance: 3, region:'D-Mecklenburg-Vorpommern', date_of_creation: '03.04.2020', observer:'Meitzner,V.', quantity: 1, source_of_origin:'Alte Datenbank Müller-Motzfeld', genus: 'Leistus', species:'terminatus'},
  {scientific_type: 'coco', author: 'Hydrogen', characteristic: 'hola', location_name:'arica', coordinate_x: 3, coordinate_y: 4, altitude: 3, tolerance: 3, region:'D-Mecklenburg-Vorpommern', date_of_creation: '03.04.2020', observer:'Meitzner,V.', quantity: 1, source_of_origin:'Alte Datenbank Müller-Motzfeld', genus: 'Leistus', species:'terminatus'},
  {scientific_type: 'coco', author: 'Hydrogen', characteristic: 'hola', location_name:'arica', coordinate_x: 3, coordinate_y: 4, altitude: 3, tolerance: 3, region:'D-Mecklenburg-Vorpommern', date_of_creation: '03.04.2020', observer:'Meitzner,V.', quantity: 1, source_of_origin:'Alte Datenbank Müller-Motzfeld', genus: 'Leistus', species:'terminatus'},
  {scientific_type: 'coco', author: 'Hydrogen', characteristic: 'hola', location_name:'arica', coordinate_x: 3, coordinate_y: 4, altitude: 3, tolerance: 3, region:'D-Mecklenburg-Vorpommern', date_of_creation: '03.04.2020', observer:'Meitzner,V.', quantity: 1, source_of_origin:'Alte Datenbank Müller-Motzfeld', genus: 'Leistus', species:'terminatus'},
  {scientific_type: 'coco', author: 'Hydrogen', characteristic: 'hola', location_name:'arica', coordinate_x: 3, coordinate_y: 4, altitude: 3, tolerance: 3, region:'D-Mecklenburg-Vorpommern', date_of_creation: '03.04.2020', observer:'Meitzner,V.', quantity: 1, source_of_origin:'Alte Datenbank Müller-Motzfeld', genus: 'Leistus', species:'terminatus'},
  {scientific_type: 'coco', author: 'Hydrogen', characteristic: 'hola', location_name:'arica', coordinate_x: 3, coordinate_y: 4, altitude: 3, tolerance: 3, region:'D-Mecklenburg-Vorpommern', date_of_creation: '03.04.2020', observer:'Meitzner,V.', quantity: 1, source_of_origin:'Alte Datenbank Müller-Motzfeld', genus: 'Leistus', species:'terminatus'},
  {scientific_type: 'coco', author: 'Hydrogen', characteristic: 'hola', location_name:'arica', coordinate_x: 3, coordinate_y: 4, altitude: 3, tolerance: 3, region:'D-Mecklenburg-Vorpommern', date_of_creation: '03.04.2020', observer:'Meitzner,V.', quantity: 1, source_of_origin:'Alte Datenbank Müller-Motzfeld', genus: 'Leistus', species:'terminatus'},
  {scientific_type: 'coco', author: 'Hydrogen', characteristic: 'hola', location_name:'arica', coordinate_x: 3, coordinate_y: 4, altitude: 3, tolerance: 3, region:'D-Mecklenburg-Vorpommern', date_of_creation: '03.04.2020', observer:'Meitzner,V.', quantity: 1, source_of_origin:'Alte Datenbank Müller-Motzfeld', genus: 'Leistus', species:'terminatus'}

];

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

  finding: Finding [] = EXAMPLE_DATA;

  matColumnDef = []



  constructor(private findingService: FindingService){

  }

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['Scientific type', 'Author', 'Characteristic', 'Location name', 'Coordinate x', 'Coordinate y', 'Altitude', 'Tolerance', 'Region', 'Date of creation', 'Observer', 'Quantity', 'Source of origin', 'Genus', 'Species' ];
  displayedColumns2 = ['scientific_type', 'author', 'characteristic', 'location_name', 'coordinate_x', 'coordinate_y', 'altitude', 'tolerance', 'region', 'date_of_creation', 'observer', 'quantity', 'source_of_origin', 'genus', 'species' ];

  ngOnInit() {
    this.dataSource = new DataTableDataSource();

    // this.findingService.searchAll().subscribe(x=>{
    //   console.log("THIS VALUE:",x);
      // this.finding = x;
  // })

  // ngAfterViewInit() {
  //   this.dataSource.sort = this.sort;
  //   this.dataSource.paginator = this.paginator;
  //   this.table.dataSource = this.dataSource;
  // }
  }

  changeData(){

    this.findingService.searchAll().subscribe(x=>{
      console.log("THIS VALUE:",x);
      this.finding = x;
  })
}
}
