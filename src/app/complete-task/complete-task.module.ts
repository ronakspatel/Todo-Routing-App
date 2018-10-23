import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompleteTaskComponent } from './complete-task.component';
import { SharedModule } from '../shared/shared.module';
import { CompleteTaskRoutingModule } from './complete-task-routing.module';


@NgModule({
  imports: [
    CommonModule,SharedModule,CompleteTaskRoutingModule
    
  ],
  exports:[],
  declarations: [CompleteTaskComponent]
})
export class CompleteTaskModule { }
