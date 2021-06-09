import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {Role} from '@core/role.model';
import {RoleGuardService} from '@core/role-guard.service';

import {LoginComponent} from './login.component';


const routes: Routes = [
  {
      path: '', component: LoginComponent,
      children: [
      {path: 'login', component: LoginComponent}
      
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule {
}

