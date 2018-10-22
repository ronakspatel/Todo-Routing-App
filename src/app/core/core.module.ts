import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './topbar/topbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AppRoutingModule } from '../app-routing.module';
import { HomeComponent } from './home.component';
import { AddTaskComponent } from '../add-task/add-task.component';
import { CompleteTaskComponent } from '../complete-task/complete-task.component';
import { IncompleteTaskComponent } from '../incomplete-task/incomplete-task.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule
    
  ],
  exports: [TopbarComponent,
    SidebarComponent,
    AppRoutingModule,
    SharedModule
  ],
  declarations: [TopbarComponent,
    SidebarComponent,
    HomeComponent,
    CompleteTaskComponent,
    IncompleteTaskComponent,
    AddTaskComponent
   ]

})
export class CoreModule { }
