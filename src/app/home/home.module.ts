import {NgModule} from '@angular/core';

import {SharedModule} from '@shared/shared.module';
import {HomeComponent} from './home.component';

import { HomeRoutingModule } from './home-routing.module';
import { MapComponent } from './map/map.component';


@NgModule({
  declarations: [
    
    HomeComponent,
          MapComponent,
 
  ],
  entryComponents: [
   
  ],
  imports: [
    
    SharedModule,
    HomeRoutingModule
   
  ],
  
  providers: [
    
  ]
})
export class HomeModule {

}
