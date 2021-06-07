import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';




import {UppercaseWords} from '@shared/pipes/UppercaseWordsPipe';



import {UserCompleteService} from '@shared/services/userComplete.service';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
  declarations: [
  
    
    
    
   
    
   
    
    UppercaseWords,
    
    
   

  ],
  providers: [UserCompleteService],
  exports: [
    
    CommonModule,
    FormsModule,
    ReactiveFormsModule, 
  
    UppercaseWords,
   
  ],
  entryComponents: [
    
  ]
})
export class SharedModule {
}
