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
          let callBack = this.prodService.getProductoById(this.idEdit);
          callBack.subscribe(
            (val) => {
                  var product = val.data;
                  this.idEdit = product.id;
                  this.namePro = product.name;
                  this.cantidad = product.stock;
                debugger
            },
            response => {
                console.log("POST call in error", response);
                debugger
            },
            () => {
              debugger
                console.log("The POST observable is now completed.");
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
    this.cantidad = "";

  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
        this.cleanForm();
        return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        this.cleanForm();
        return 'by clicking on a backdrop';
    } else {
        this.cleanForm();
        return  `with: ${reason}`;
    }
}

   //SECCION DE  NOTIFICACIONES
  //AUTOR: CAMILO GIRALDO 2019
  //variables para los mensajes de notificacion
  titleNotification:string;
  messageNotification:string;
  iconNotification:string;
  colorAlert:string;
  //-------------------------------------------
  //METODO PARA ABRIR EL MODAL DE LA NOTIFICACION
  openNotification(messageComplement:string, type:string){


    let titleNot:string;
    let firstMessage:string;
    let classBox:string;
    let classIcon;
    let colorIcon;

    switch (type){
      case 'succes':
        titleNot = "Confirmación";
        firstMessage ="Registro exitoso.";
        classIcon = "fa fa-check-square-o";
        colorIcon = "green";
        classBox = "succes-msg";
      break;
      case 'info':
        titleNot = "Información";
        firstMessage ="";
        classIcon ="fa fa-exclamation-triangle";
        colorIcon = "#b0b01a";
        classBox = "info-msg";
      break;
      case 'error':
        titleNot = "Error";
        firstMessage ="Opps! ";
        classIcon ="fa fa-times";
        colorIcon="red";
        classBox = "error-msg";
      break;
    }

    this.titleNotification =titleNot;
    this.messageNotification = firstMessage + messageComplement;
    this.iconNotification = classIcon;
    this.colorAlert = colorIcon;
    this.modalService.open(this.modalNotification, { windowClass: classBox });

  }




}
