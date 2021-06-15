import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {Observable} from 'rxjs';
import { of } from "rxjs";


@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent {

  @Input() title = 'Management';
  @Input() createAction = true;
  @Input() readAction = true;
  @Input() updateAction = true;
  @Input() deleteAction = true;
  @Output() create = new EventEmitter<any>();
  @Output() read = new EventEmitter<any>();
  @Output() update = new EventEmitter<any>();
  @Output() delete = new EventEmitter<any>();
  dataSource: MatTableDataSource<any>;
  columns: Array<string>;
  columnsHeader: Array<string>;


  EXAMPLE_DATA = of (
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
    
  );




  @Input()
  set data(data: Observable<any[]>) {
    data.subscribe(dataValue => {
      const columnsSet: Set<string> = new Set();
      this.dataSource = new MatTableDataSource<any>(dataValue);
      if (dataValue) {
        dataValue.forEach(obj => Object.getOwnPropertyNames(obj)
          .forEach(column => columnsSet.add(column))
        );
        this.columns = Array.from(columnsSet);
      } else {
        this.columns = [];
      }
      columnsSet.add('actions');
      this.columnsHeader = Array.from(columnsSet);
    });
  }

  onRead(item): void {
    this.read.emit(item);
  }

  onCreate(): void {
    this.create.emit();
  }

  onUpdate(item): void {
    this.update.emit(item);
  }

  onDelete(item): void {
    this.delete.emit(item);
  }
}

