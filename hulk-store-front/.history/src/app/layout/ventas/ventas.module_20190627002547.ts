import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DataTablesModule } from 'angular-datatables';

import { ProductosRoutingModule } from './productos.routing.module';
import { ProductosComponent} from './productos.component';
import { PageHeaderModule } from './../../shared';
import {
    ReactiveFormsModule,
    FormsModule
} from '@angular/forms';



@NgModule({
    imports: [CommonModule,
      ProductosRoutingModule,
      PageHeaderModule,
      NgbModule.forRoot(),
      DataTablesModule,
      FormsModule,
      ReactiveFormsModule],
    declarations: [ProductosComponent]
})
export class ProductosModule{}
