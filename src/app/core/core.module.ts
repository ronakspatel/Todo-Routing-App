import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './topbar/topbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AppRoutingModule } from '../app-routing.module';
import { HomeComponent } from './home.component';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    
    SharedModule
    
  ],
  exports: [TopbarComponent,
    SidebarComponent,
    
    SharedModule
  ],
  declarations: [TopbarComponent,
    SidebarComponent,
    HomeComponent,
    
   ]

})
export class CoreModule { }
