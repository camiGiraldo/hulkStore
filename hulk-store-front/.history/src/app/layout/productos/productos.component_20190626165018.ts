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
import { ProductosService } from '../../_services/productosService';

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
  namePro:string ='';
  cantidad:any ='';

  constructor(private zone: NgZone, private modalService: NgbModal, private prodService: ProductosService) { 
    this.idEdit = '';
    this.url = environment.urlServicesProduct;
    this.cellSelect = {
      id : ''
    }
    this.message = 'No se ha seleccionado una fila';
  }

  ngAfterViewInit(): void {
    this.dtTrigger.next();

  }

  someClickHandler(info: any): void {

    if(this.cellSelect.id !== info.id){
      this.cellSelect = {
        id : info.id
      }
      this.message =  info.name;
      this.idEdit = info.id;
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
    this.dtOptions = {
      ajax: {
        url: this.url + 'list',
        headers: {
          'Authorization': 'Bearer '+ localStorage.getItem("token")
      }
    },
      columns: [{
        
        title: 'ID',
        data: 'id',
        visible: false
      }, {
        title: 'Nombre',
        data: 'name'
      }, {
        title: 'Cantidad',
        data: 'stock'
      }],
      rowCallback:(row: Node, data: any[] | Object, index: number) => {
      
         const self = this;
         $('td', row).unbind('click');
         $('td', row).bind('click', () => {
           
           self.someClickHandler(data);
         });
         return row;
      },
      select:{
            style: 'single'
      },
      "language": {
           "url": "//cdn.datatables.net/plug-ins/1.10.16/i18n/Spanish.json"
       }
    };
  }

  rerenderTable(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      // Destroy the table first
      dtInstance.destroy();
      this.idEdit = "";
      // Call the dtTrigger to rerender again
      this.dtTrigger.next();
    });
  }

  

  open(content, action:string) {
      this.modalRef = this.modalService.open(content);
      if(action == 'edit'){
  
        if(this.idEdit != ''){
          let callBack = this.facService.getFacultadById(this.idEdit);
          callBack.subscribe(res => {
            let data = res.json();
  
            if(data.status && data.status === 'OK'){
              var facultad = data.data;
              this.idEdit = facultad.idFacultad;
              this.nameFac = facultad.nombre;
              this.abreviatura = facultad.abreviatura
  
            }
          });
        }
        else{
          this.message ="Por favor seleccionar una fila para editar";
          this.modalRef.close();
          this.openNotification(this.message, 'error');
        }
      }
  
  
      this.modalRef.result.then((result) => {
        this.cleanForm();
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.cleanForm();
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
  
  }
  cleanForm(){
    //this.idEdit = "";
    this.namePro = "";
    this.cantidad ="";

  }




}
