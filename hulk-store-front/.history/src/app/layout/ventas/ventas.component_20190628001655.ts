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
import { VentasService } from '../../_services/ventasService';
import { Venta } from './venta';
import { Producto } from '../productos/producto';
import { ProductosService } from '../../_services/productosService';

export interface Respuesta {
  data: any;
  status: any;
}

export interface ProductoVendido{
  codigo:number;
  name:string;
  cantidad:number;
}

export interface ProductoDto{
  id:number;
  name:string;
  stock:number;
  dateCreated:Date;
}

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./ventas.component.scss']
})
export class VentasComponent implements OnInit, AfterViewInit {

  @ViewChild(DataTableDirective) dtElement: DataTableDirective;
  @ViewChild('mdlNotification') public modalNotification:NgbModal;

  //vaariables para la tabla
  dtOptions: any;
  dtTrigger: Subject<any> = new Subject();
  cellSelect:any;
  //------------------------

  venta:Venta;

  modalRef:any;
  public url:string;

  message = '';
  messageValidation = '';
  closeResult: string;

  //MAPEO DE LOS ATRIBUTOS DEL FORMULARIO A CREAR
  idEdit:string ='';
  totalVenta:number =0;
  productJson:string ='';

  cantidad:number;

  /**Listado de productos a vender */
  listProductToSell:ProductoVendido[];
  listProducts:ProductoDto[];

  /*Variables id para el producto seleccionado */
  productoSeleccionado:Producto;
  productoVendido:ProductoVendido;


constructor(private zone: NgZone, private modalService: NgbModal, private sellService: VentasService, private prodService: ProductosService) { 
    this.idEdit = '';
    this.url = environment.urlServicesSell;
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

    /*VAMOS A LISTAR LOS PRODUCTOS*/
    this.listarProductos();

    this.dtOptions = {
      ajax: {
        url: this.url + 'list',
        headers: {
          'Authorization': 'Bearer '+ localStorage.getItem("token")
      }
    },
      columns: [{
        
        title: 'Codigo venta',
        data: 'id'
      }, {
        title: 'Productos',
        data: function(d){
          
          let json = JSON.parse(d.productJson);
          let cellReturn = "";
          for(let i = 0; i<json.length;i++){
            let p = json[i];
            cellReturn += `codigo: ${p.id}- Nombre: ${p.name} - Cantidad: ${p.cantidad} <br>`;
          }
          return cellReturn;
          
        }
      },{
        title: 'Fecha creacion',
        data: 'date_created'
      }, {
        title: 'Total de la Venta',
        data: 'totalSell'
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

  saveForm(){
    
        if( this.totalVenta <= 0 || this.listProductToSell == []){
    
          this.openNotification("Todos los campos son obligatorios","error");
        }else{
        
         /* let id = this.idEdit === '' ? null : parseInt(this.idEdit);
          this.producto = new Producto(id,this.namePro,this.cantidad);
          debugger
          let callBack = this.prodService.saveProducto(this.producto);
          callBack.subscribe(
            (val) => {
              debugger
                 let respuesta = val as Respuesta;
                 this.modalRef.close();
                 this.openNotification("","succes");
                 this.message = 'No se ha seleccionado una fila';
                
            },
            error => {
              debugger
                console.log("POST call in error", error);
                this.messageValidation = 'Ocurrio un error al guardar el registro: '+error;
            },
            () => {
              debugger
                console.log("The POST observable is now completed.");
                this.rerenderTable();
            });
        */
    
          
        }
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

      open(content: any, action:string) {
        this.modalRef = this.modalService.open(content);
        if(action == 'edit'){
    
          if(this.idEdit != ''){
            /*let callBack = this.sellService.getProductoById(this.idEdit);
            callBack.subscribe(
              (val) => {
                   let respuesta = val as Respuesta;
                   this.idEdit = respuesta.data.id;
                   this.namePro = respuesta.data.name;
                   this.cantidad = respuesta.data.stock;
                  
              },
              response => {
                  console.log("POST call in error", response);
                  
              },
              () => {
                
                  console.log("The POST observable is now completed.");
              });*/
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
      this.totalVenta = 0;
      this.listProductToSell = [];
  
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

    listarProductos(){
      let callBack = this.prodService.getProductos();
      callBack.subscribe(
        (val) => {
          
             let respuesta = val as Respuesta;
             this.listProducts = respuesta.data as ProductoDto[];
             
        },
        error => {
         
            this.messageValidation = 'Ocurrio un error al traer los productos: '+error;
        },
        () => {

            this.rerenderTable();
        });
    }

    agregarProducto(){
      debugger
      let productoVendido = new productoVendido();
      let productSel = this.productoSeleccionado;
      
      if(productSel){
        productoVendido.codigo = productSel.id;
        productoVendido.name = productSel.name;
        productoVendido.cantidad = this.cantidad;
        this.listProductToSell.push(productoVendido);
      }
      

    }

  

}
