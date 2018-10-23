import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IncompleteTaskComponent } from './incomplete-task.component';

const routes: Routes = [
  {
    path: '',
    component: IncompleteTaskComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IncompleteTaskRoutingModule { }
