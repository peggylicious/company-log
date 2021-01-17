import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';

import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { HeaderComponent } from '../components/header/header.component';
import { DxButtonModule } from 'devextreme-angular';
// import { DxDataGridModule } from 'devextreme-angular';

@NgModule({
  declarations: [LayoutComponent, SidebarComponent, HeaderComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    DxButtonModule,
    // DxDataGridModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  exports: [LayoutComponent],
})
export class LayoutModule {}
