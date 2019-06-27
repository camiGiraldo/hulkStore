import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DataTablesModule } from 'angular-datatables';

import { VentasRoutingModule } from './ventas.routing.module';
import { VentasComponent} from './ventas.component';
import { PageHeaderModule } from './../../shared';
import {
    ReactiveFormsModule,
    FormsModule
} from '@angular/forms';



@NgModule({
    imports: [CommonModule,
      VentasRoutingModule,
      PageHeaderModule,
      NgbModule.forRoot(),
      DataTablesModule,
      FormsModule,
      ReactiveFormsModule],
    declarations: [VentasComponent]
})
export class VentasModule{}
