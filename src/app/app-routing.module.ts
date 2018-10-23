import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  
  {
    path: 'addTask',
    loadChildren: './add-task/add-task.module#AddTaskModule'
  },
  {
    path: 'incompleteTask',
    loadChildren: './incomplete-task/incomplete-task.module#IncompleteTaskModule'
  },
  {
    path: 'completeTask',
    loadChildren: './complete-task/complete-task.module#CompleteTaskModule'
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
