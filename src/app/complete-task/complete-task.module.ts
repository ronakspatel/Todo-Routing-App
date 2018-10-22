import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompleteTaskComponent } from './complete-task.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,SharedModule
    
  ],
  exports:[CompleteTaskComponent],
  declarations: [CompleteTaskComponent]
})
export class CompleteTaskModule { }
