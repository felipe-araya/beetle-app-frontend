import {NgModule} from '@angular/core';

import {SharedModule} from '@shared/shared.module';
import {HomeComponent} from './home.component';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';


@NgModule({
  declarations: [
    
    HomeComponent,
 
  ],
  entryComponents: [
   
  ],
  imports: [
    
    SharedModule,
    HomeRoutingModule
   
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    
  ]
})
export class HomeModule {

}
