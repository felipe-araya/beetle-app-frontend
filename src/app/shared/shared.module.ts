import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FlexLayoutModule, FlexModule} from '@angular/flex-layout';

import {MaterialModule} from '@shared/material.module';

import {CancelYesDialogComponent} from '@shared/dialogs/cancel-yes-dialog.component';
import {LoginDialogComponent} from '@shared/dialogs/login-dialog.component';
import {NumberDialogComponent} from '@shared/dialogs/number-dialog.component';
import {ReadDetailDialogComponent} from '@shared/dialogs/read-detail.dialog.component';



import {FooterComponent} from '@shared/components/footer.component';

import {UppercaseWords} from '@shared/pipes/UppercaseWordsPipe';
import {UserCompleteService} from '@shared/services/userComplete.service';
import {CrudComponent} from '@shared/components/crud/crud.component';


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
    CrudComponent,
    CancelYesDialogComponent,
    LoginDialogComponent,
    NumberDialogComponent,
    ReadDetailDialogComponent, 
   

    

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
    MaterialModule,
    LoginDialogComponent,
    NumberDialogComponent,
    ReadDetailDialogComponent,
   
    CrudComponent
  ],
  entryComponents: [
    
  ]
})
export class SharedModule {
  
}
