import { AfterViewInit, Component, NgZone, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import { routerTransition } from '../../router.animations';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs/Subject';
import {
    Validators,
    FormBuilder
} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import * as $ from 'jquery';
import { environment } from '../../../environments/environment';
import { ProductosService } from '../../../../.history/src/app/_services/productos.services_20190626145905';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./productos.component.scss']
})


export class ProductosComponent implements OnInit, AfterViewInit {

  @ViewChild(DataTableDirective) dtElement: DataTableDirective;
  @ViewChild('mdlNotification') public modalNotification:NgbModal;

  //vaariables para la tabla
  dtOptions: any;
  dtTrigger: Subject<any> = new Subject();
  cellSelect:any;
  //------------------------

  modalRef:any;
  public url:string;


  message = '';
  messageValidation = '';
  closeResult: string;

  //MAPEO DE LOS ATRIBUTOS DEL FORMULARIO A CREAR
  idEdit:string ='';

  constructor(private zone: NgZone, private modalService: NgbModal, private prodService: ProductosService) { 
    this.idEdit = '';
    this.url = environment.urlServices;
    this.cellSelect = {
      id : ''
    }
    this.message = 'No se ha seleccionado una fila';
  }

  ngAfterViewInit(): void {
    this.dtTrigger.next();

  }

  someClickHandler(info: any): void {

    if(this.cellSelect.idFacultad !== info.idFacultad){
      this.cellSelect = {
        id : info.idFacultad
      }
      this.message =  info.nombre;
      this.idEdit = info.idFacultad;
    }
    else{
      this.cellSelect = {
        id : ''
      }
      this.message = 'no se ha seleccionado una fila';
      this.idEdit = '';
    }


  }

  ngOnInit() {
   
  }

  

  open(content,i){

  }


}
