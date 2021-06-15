import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
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

/**
 * Data source for the DataTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class DataTableDataSource extends DataSource<DataTableItem> {
  data: DataTableItem[] = EXAMPLE_DATA;
  paginator: MatPaginator;
  sort: MatSort;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<DataTableItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: DataTableItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: DataTableItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'scientific_type': return compare(a.scientific_type, b.scientific_type, isAsc);
        case 'author': return compare(+a.author, +b.author, isAsc);
        case 'characteristic': return compare(+a.characteristic, +b.characteristic, isAsc);
        case 'location_name': return compare(+a.location_name, +b.location_name, isAsc);
        case 'coordinate_x': return compare(+a.coordinate_x, +b.coordinate_x, isAsc);
        case 'coordinate_y': return compare(+a.coordinate_y, +b.coordinate_y, isAsc);
        case 'altitude': return compare(+a.altitude, +b.altitude, isAsc);
        case 'tolerance': return compare(+a.tolerance, +b.tolerance, isAsc);
        case 'region': return compare(+a.region, +b.region, isAsc);
        case 'date_of_creation': return compare(+a.date_of_creation, +b.date_of_creation, isAsc);
        case 'observer': return compare(+a.observer, +b.observer, isAsc);
        case 'quantity': return compare(+a.quantity, +b.quantity, isAsc);
        case 'source_of_origin': return compare(+a.source_of_origin, +b.source_of_origin, isAsc);
        case 'genus': return compare(+a.genus, +b.genus, isAsc);
        case 'species': return compare(+a.species, +b.species, isAsc);
        

        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
