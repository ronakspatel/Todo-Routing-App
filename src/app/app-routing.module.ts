import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CompleteTaskComponent } from './complete-task/complete-task.component';
import { IncompleteTaskComponent } from './incomplete-task/incomplete-task.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { HomeComponent } from './core/home.component';


const routes: Routes = [
  {path : '',component : HomeComponent},
  { path: 'CompleteTask', component: CompleteTaskComponent },
  { path: 'IncompleteTask', component:IncompleteTaskComponent},
  { path: 'AddTask', component: AddTaskComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
