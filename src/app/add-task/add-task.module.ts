import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTaskComponent } from './add-task.component';
import { AddTaskRoutingModule } from './add-task-routing.module';

@NgModule({
  imports: [
    CommonModule,AddTaskRoutingModule
  ],
  exports:[],
  declarations: [AddTaskComponent]
})
export class AddTaskModule { }
