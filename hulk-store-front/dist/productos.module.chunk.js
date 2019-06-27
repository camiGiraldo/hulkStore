webpackJsonp(["productos.module"],{

/***/ "./src/app/layout/productos/producto.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Producto; });
var Producto = /** @class */ (function () {
    function Producto(id, name, stock) {
        this.id = id;
        this.name = name;
        this.stock = stock;
        this.dateCreated = new Date();
    }
    return Producto;
}());



/***/ }),

/***/ "./src/app/layout/productos/productos.component.html":
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\r\n    <app-page-header [heading]=\"'Productos'\" [icon]=\"'fa-building'\"></app-page-header>\r\n    <div class=\"cont-actions\">\r\n        <div class=\"fac-selec\">Producto seleccionado: <strong>{{ message }}</strong></div>\r\n\r\n        <div *ngIf=\"idEdit\" class=\"flt-button-action\" title=\"Editar\" (click)=\"open(content,'edit')\">\r\n            <i class=\"fa fa-edit\"></i>\r\n        </div>\r\n        <div *ngIf=\"!idEdit\" class=\"flt-button-action\" title=\"Editar\" (click)=\"open(content,'edit')\">\r\n            <i class=\"fa fa-edit\"></i>\r\n        </div>\r\n        <div class=\"flt-button-action\" title=\"Crear Programas\" (click)=\"open(content,'new')\">\r\n            <i class=\"fa fa-plus\"></i>\r\n        </div>\r\n    </div>\r\n    <table datatable [dtOptions]=\"dtOptions\" id=\"tbl-productos\" [dtTrigger]=\"dtTrigger\" class=\"table table-striped table-bordered\" cellspacing=\"0\" width=\"100%\"></table>\r\n</div>\r\n\r\n<!--FORMULARIO MODAL PARA CREAR Y EDITAR PRODUCTOS-->\r\n<ng-template #content let-c=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Producto</h4>\r\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        <form>\r\n            <div class=\"form-group\">\r\n                <label for=\"exampleInputEmail1\">Nombre Producto:</label>\r\n                <input type=\"text\" class=\"form-control\" id=\"txtProducto\" [(ngModel)]=\"namePro\" name=\"namePro\" placeholder=\"Historieta ...\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label for=\"exampleInputEmail1\">Cantidad::</label>\r\n                <input type=\"text\" class=\"form-control\" id=\"txtCantidad\" [(ngModel)]=\"cantidad\" name=\"cantidad\" placeholder=\"100000\" required>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <input type=\"hidden\" id=\"txtIdFacultad\" [(ngModel)]=\"idEdit\" name=\"idEdit\">\r\n            </div>\r\n        </form>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Cancelar</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"saveForm()\">Guardar</button>\r\n\r\n    </div>\r\n</ng-template>\r\n\r\n\r\n\r\n<!--MODAL DE NOTIFICACIONES-->\r\n<ng-template #mdlNotification let-c=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">{{titleNotification}}</h4>\r\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n            </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        <div class=\"row\">\r\n\r\n            <div class=\"col-2 icon-message\">\r\n                <i [className]='iconNotification' [style.color]=\"colorAlert\"></i>\r\n            </div>\r\n            <div class=\"col-10\">\r\n                {{messageNotification}}\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"c('Close click')\">Aceptar</button>\r\n    </div>\r\n</ng-template>"

/***/ }),

/***/ "./src/app/layout/productos/productos.component.scss":
/***/ (function(module, exports) {

module.exports = ".cont-actions {\n  width: 100%;\n  height: 40px;\n  background-color: #e9ecef;\n  color: #808090;\n  padding: 0 7px;\n  padding-top: 7px; }\n\n.fac-selec {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  width: 70%;\n  float: left; }\n\n.flt-button-action {\n  width: 25px;\n  float: right;\n  height: 25px;\n  border-radius: 50%;\n  -webkit-box-shadow: 2px 2px 10px #09afa4;\n          box-shadow: 2px 2px 10px #09afa4;\n  background-color: #0fb8ad;\n  color: #FFF;\n  text-align: center;\n  line-height: 2;\n  font-size: 14px;\n  margin-right: 5px;\n  cursor: pointer;\n  background-position: center;\n  -webkit-transition: background 0.8s;\n  transition: background 0.8s; }\n\n/*Tabla de facultades*/\n\n#tbl-productos {\n  border: 1px solid #bbd1ec; }\n\n#tbl-productos thead th {\n    color: #5f5f73;\n    border-bottom: 1px solid #7cb3e4;\n    padding: 0;\n    text-align: center;\n    font-size: 15px; }\n\n#tbl-productos tbody {\n    font-size: 13px; }\n\n#tbl-productos thead tr {\n    background: #bbd1ec; }\n\n.flt-button-action:hover {\n  background: #47a7f5 radial-gradient(circle, transparent 1%, #47a7f5 1%) center/15000%; }\n\n.flt-button-action:active {\n  background-color: #6eb9f7;\n  background-size: 100%;\n  -webkit-transition: background 0s;\n  transition: background 0s; }\n\n/*ESTILOS PARA LOS MENSAJES DE ALERTA*/\n\n.succes-msg .modal-content {\n  background-color: #e0ffe0;\n  color: #000;\n  font-weight: bold; }\n\n.succes-msg .modal-content .modal-header h4 {\n  color: green;\n  font-weight: 700; }\n\n.info-msg .modal-content {\n  background-color: #fafad5;\n  color: #000;\n  font-weight: bold; }\n\n.info-msg .modal-content .modal-header h4 {\n  color: #b0b01a;\n  font-weight: 700; }\n\n.error-msg .modal-content {\n  background-color: #efd4d4;\n  color: #000;\n  font-weight: bold; }\n\n.error-msg .modal-content .modal-header h4 {\n  color: red;\n  font-weight: 700; }\n\n.icon-message {\n  height: 50px; }\n\n.icon-message i {\n  font-size: 50px; }\n"

/***/ }),

/***/ "./src/app/layout/productos/productos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_datatables__ = __webpack_require__("./node_modules/angular-datatables/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery__ = __webpack_require__("./node_modules/jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_productosService__ = __webpack_require__("./src/app/_services/productosService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__producto__ = __webpack_require__("./src/app/layout/productos/producto.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ProductosComponent = /** @class */ (function () {
    function ProductosComponent(zone, modalService, prodService) {
        this.zone = zone;
        this.modalService = modalService;
        this.prodService = prodService;
        this.dtTrigger = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["a" /* Subject */]();
        this.message = '';
        this.messageValidation = '';
        //MAPEO DE LOS ATRIBUTOS DEL FORMULARIO A CREAR
        this.idEdit = '';
        this.namePro = '';
        this.cantidad = '';
        this.idEdit = '';
        this.url = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].urlServicesProduct;
        this.cellSelect = {
            id: ''
        };
        this.message = 'No se ha seleccionado una fila';
    }
    ProductosComponent.prototype.ngAfterViewInit = function () {
        this.dtTrigger.next();
    };
    ProductosComponent.prototype.someClickHandler = function (info) {
        if (this.cellSelect.id !== info.id) {
            this.cellSelect = {
                id: info.id
            };
            this.message = info.name;
            this.idEdit = info.id;
        }
        else {
            this.cellSelect = {
                id: ''
            };
            this.message = 'no se ha seleccionado una fila';
            this.idEdit = '';
        }
    };
    ProductosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dtOptions = {
            ajax: {
                url: this.url + 'list',
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem("token")
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
            rowCallback: function (row, data, index) {
                var self = _this;
                __WEBPACK_IMPORTED_MODULE_4_jquery__('td', row).unbind('click');
                __WEBPACK_IMPORTED_MODULE_4_jquery__('td', row).bind('click', function () {
                    self.someClickHandler(data);
                });
                return row;
            },
            select: {
                style: 'single'
            },
            "language": {
                "url": "//cdn.datatables.net/plug-ins/1.10.16/i18n/Spanish.json"
            }
        };
    };
    ProductosComponent.prototype.saveForm = function () {
        var _this = this;
        debugger;
        if (this.namePro == '' || this.cantidad == '') {
            this.openNotification("Todos los campos son obligatorios", "error");
        }
        else {
            var id = this.idEdit === '' ? null : parseInt(this.idEdit);
            this.producto = new __WEBPACK_IMPORTED_MODULE_7__producto__["a" /* Producto */](id, this.namePro, this.cantidad);
            debugger;
            var callBack = this.prodService.saveProducto(this.producto);
            callBack.subscribe(function (val) {
                debugger;
                var respuesta = val;
                _this.modalRef.close();
                _this.openNotification("", "succes");
                _this.message = 'No se ha seleccionado una fila';
            }, function (error) {
                debugger;
                console.log("POST call in error", error);
                _this.messageValidation = 'Ocurrio un error al guardar el registro: ' + error;
            }, function () {
                debugger;
                console.log("The POST observable is now completed.");
                _this.rerenderTable();
            });
        }
    };
    ProductosComponent.prototype.rerenderTable = function () {
        var _this = this;
        this.dtElement.dtInstance.then(function (dtInstance) {
            // Destroy the table first
            dtInstance.destroy();
            _this.idEdit = "";
            // Call the dtTrigger to rerender again
            _this.dtTrigger.next();
        });
    };
    ProductosComponent.prototype.open = function (content, action) {
        var _this = this;
        this.modalRef = this.modalService.open(content);
        if (action == 'edit') {
            if (this.idEdit != '') {
                var callBack = this.prodService.getProductoById(this.idEdit);
                callBack.subscribe(function (val) {
                    var respuesta = val;
                    _this.idEdit = respuesta.data.id;
                    _this.namePro = respuesta.data.name;
                    _this.cantidad = respuesta.data.stock;
                }, function (response) {
                    console.log("POST call in error", response);
                }, function () {
                    console.log("The POST observable is now completed.");
                });
            }
            else {
                this.message = "Por favor seleccionar una fila para editar";
                this.modalRef.close();
                this.openNotification(this.message, 'error');
            }
        }
        this.modalRef.result.then(function (result) {
            _this.cleanForm();
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.cleanForm();
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    ProductosComponent.prototype.cleanForm = function () {
        //this.idEdit = "";
        this.namePro = "";
        this.cantidad = "";
    };
    ProductosComponent.prototype.getDismissReason = function (reason) {
        if (reason === __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* ModalDismissReasons */].ESC) {
            this.cleanForm();
            return 'by pressing ESC';
        }
        else if (reason === __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* ModalDismissReasons */].BACKDROP_CLICK) {
            this.cleanForm();
            return 'by clicking on a backdrop';
        }
        else {
            this.cleanForm();
            return "with: " + reason;
        }
    };
    //-------------------------------------------
    //METODO PARA ABRIR EL MODAL DE LA NOTIFICACION
    ProductosComponent.prototype.openNotification = function (messageComplement, type) {
        var titleNot;
        var firstMessage;
        var classBox;
        var classIcon;
        var colorIcon;
        switch (type) {
            case 'succes':
                titleNot = "Confirmación";
                firstMessage = "Registro exitoso.";
                classIcon = "fa fa-check-square-o";
                colorIcon = "green";
                classBox = "succes-msg";
                break;
            case 'info':
                titleNot = "Información";
                firstMessage = "";
                classIcon = "fa fa-exclamation-triangle";
                colorIcon = "#b0b01a";
                classBox = "info-msg";
                break;
            case 'error':
                titleNot = "Error";
                firstMessage = "Opps! ";
                classIcon = "fa fa-times";
                colorIcon = "red";
                classBox = "error-msg";
                break;
        }
        this.titleNotification = titleNot;
        this.messageNotification = firstMessage + messageComplement;
        this.iconNotification = classIcon;
        this.colorAlert = colorIcon;
        this.modalService.open(this.modalNotification, { windowClass: classBox });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_angular_datatables__["a" /* DataTableDirective */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_angular_datatables__["a" /* DataTableDirective */])
    ], ProductosComponent.prototype, "dtElement", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('mdlNotification'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["e" /* NgbModal */])
    ], ProductosComponent.prototype, "modalNotification", void 0);
    ProductosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-productos',
            template: __webpack_require__("./src/app/layout/productos/productos.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            styles: [__webpack_require__("./src/app/layout/productos/productos.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["e" /* NgbModal */], __WEBPACK_IMPORTED_MODULE_6__services_productosService__["a" /* ProductosService */]])
    ], ProductosComponent);
    return ProductosComponent;
}());



/***/ }),

/***/ "./src/app/layout/productos/productos.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductosModule", function() { return ProductosModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_datatables__ = __webpack_require__("./node_modules/angular-datatables/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__productos_routing_module__ = __webpack_require__("./src/app/layout/productos/productos.routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__productos_component__ = __webpack_require__("./src/app/layout/productos/productos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared__ = __webpack_require__("./src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var ProductosModule = /** @class */ (function () {
    function ProductosModule() {
    }
    ProductosModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_4__productos_routing_module__["a" /* ProductosRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_6__shared__["b" /* PageHeaderModule */],
                __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["f" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3_angular_datatables__["b" /* DataTablesModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* ReactiveFormsModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_5__productos_component__["a" /* ProductosComponent */]]
        })
    ], ProductosModule);
    return ProductosModule;
}());



/***/ }),

/***/ "./src/app/layout/productos/productos.routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductosRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__productos_component__ = __webpack_require__("./src/app/layout/productos/productos.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__productos_component__["a" /* ProductosComponent */]
    }
];
var ProductosRoutingModule = /** @class */ (function () {
    function ProductosRoutingModule() {
    }
    ProductosRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], ProductosRoutingModule);
    return ProductosRoutingModule;
}());



/***/ })

});
//# sourceMappingURL=productos.module.chunk.js.map