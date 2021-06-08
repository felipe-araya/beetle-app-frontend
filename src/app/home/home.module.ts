import {NgModule} from '@angular/core';

import {SharedModule} from '@shared/shared.module';
import {HomeComponent} from './home.component';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import "@ui5/webcomponents/dist/Calendar";
import "@ui5/webcomponents-localization/dist/features/calendar/Buddhist.js";
import "@ui5/webcomponents-localization/dist/features/calendar/Islamic.js";
import "@ui5/webcomponents-localization/dist/features/calendar/Japanese.js";
import "@ui5/webcomponents-localization/dist/features/calendar/Persian.js";
import "@ui5/webcomponents-fiori/dist/ShellBarItem";
import "@ui5/webcomponents/dist/Button";
import "@ui5/webcomponents/dist/ColorPalette.js";
import "@ui5/webcomponents-fiori/dist/features/CoPilotAnimation.js";

import "@ui5/webcomponents-fiori/dist/Assets.js";
import "@ui5/webcomponents-fiori/dist/features/CoPilotAnimation.js";
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
