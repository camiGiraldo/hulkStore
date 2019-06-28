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
//import { Producto } from './producto';

export interface Respuesta {
  data: any;
  status: any;
}

export interface ProductoVendido{
  id:number;
  name:string;
  cantidad:number;
}

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
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

  modalRef:any;
  public url:string;

  message = '';
  messageValidation = '';
  closeResult: string;

  //MAPEO DE LOS ATRIBUTOS DEL FORMULARIO A CREAR
  idEdit:string ='';
  totalVenta:number =0;
  productJson:string ='';

  /**Listado de productos a vender */
  listProductToSell:ProductoVendido[];

  constructor(private zone: NgZone, private modalService: NgbModal, private sellService: VentasService) { 
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
        title: 'Total de la Venta',
        data: 'totalSell'
      }, {
        title: 'Productos',
        data: 'productJson'
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
    debugger
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

  

}