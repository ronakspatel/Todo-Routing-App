import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms'

import { SharedModule } from '../shared/shared.module';
import { IncompleteTaskRoutingModule } from './incomplete-task-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    IncompleteTaskRoutingModule
    
  ],
  exports:[],
  declarations: []
})
export class IncompleteTaskModule { }
