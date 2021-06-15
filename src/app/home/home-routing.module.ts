import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {Role} from '@core/role.model';
import {RoleGuardService} from '@core/role-guard.service';

import {HomeComponent} from './home.component';
import { TableComponent } from './table/table.component';
import { MapComponent } from './map/map.component';
import { FindingManagementComponent } from './finding-management/finding-management.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
    {path: 'home', component: HomeComponent},
    {path: 'table', component: TableComponent},
    {path: 'map', component: MapComponent},
    {path: 'finding-management', component:FindingManagementComponent}
    
     ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}
