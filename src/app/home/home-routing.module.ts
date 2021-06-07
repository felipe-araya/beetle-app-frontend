import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {Role} from '@core/role.model';
import {RoleGuardService} from '@core/role-guard.service';

import {HomeComponent} from './home.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
    {path: 'home', component: HomeComponent}
    
     ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}
