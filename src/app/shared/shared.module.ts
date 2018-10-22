import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './component/table.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,FormsModule
  ],
  exports:[TableComponent],
  declarations: [TableComponent]
})
export class SharedModule { }
