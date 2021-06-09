import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FlexLayoutModule, FlexModule} from '@angular/flex-layout';

import {MaterialModule} from '@shared/material.module';

import {FooterComponent} from '@shared/components/footer.component';




import {UppercaseWords} from '@shared/pipes/UppercaseWordsPipe';
import {UserCompleteService} from '@shared/services/userComplete.service';


@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      MaterialModule,
      FlexLayoutModule,
      FlexModule,
      ReactiveFormsModule
    ],
  declarations: [
  
    FooterComponent,
    UppercaseWords,
    

  ],
  
  providers: [UserCompleteService],
  exports: [
    
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    FlexModule,
    ReactiveFormsModule, 
    FooterComponent,
    UppercaseWords,
    MaterialModule
   
  ],
  entryComponents: [
    
  ]
})
export class SharedModule {
  
}
