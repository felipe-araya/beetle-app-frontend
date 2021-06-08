import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FooterComponent} from '@shared/components/footer/footer.component';


import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import {UppercaseWords} from '@shared/pipes/UppercaseWordsPipe';
import {UserCompleteService} from '@shared/services/userComplete.service';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
  declarations: [
  
    FooterComponent,
    UppercaseWords,
    

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [UserCompleteService],
  exports: [
    
    CommonModule,
    FormsModule,
    ReactiveFormsModule, 
    FooterComponent,
    UppercaseWords,
   
  ],
  entryComponents: [
    
  ]
})
export class SharedModule {
}
