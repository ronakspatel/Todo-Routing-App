import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTaskComponent } from './add-task.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[AddTaskComponent],
  declarations: [AddTaskComponent]
})
export class AddTaskModule { }
