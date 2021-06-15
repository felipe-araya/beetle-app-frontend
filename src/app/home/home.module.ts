import {NgModule} from '@angular/core';

import {SharedModule} from '@shared/shared.module';
import {HomeComponent} from './home.component';

import { HomeRoutingModule } from './home-routing.module';
import { MapComponent } from './map/map.component';
import { TableComponent } from './table/table.component';
import { FindingManagementComponent } from './finding-management/finding-management.component';
import { FindingCreationDialogComponent } from './finding-management/finding-creation-dialog.component';
import { FindingUpdateDialogComponent } from './finding-management/finding-update-dialog.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';


@NgModule({
  declarations: [
    
    HomeComponent,
    MapComponent,
    TableComponent,
    FindingManagementComponent,
    FindingCreationDialogComponent,
    FindingUpdateDialogComponent
 
  ],
  entryComponents: [
   
  ],
  imports: [
    
    SharedModule,
    HomeRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
   
  ],
  
  providers: [
    
  ]
})
export class HomeModule {

}
