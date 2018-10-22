import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms'
import { IncompleteTaskComponent } from './incomplete-task.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule
    
  ],
  exports:[IncompleteTaskComponent,SharedModule],
  declarations: [IncompleteTaskComponent]
})
export class IncompleteTaskModule { }
