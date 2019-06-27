export class Producto {
    public id:number;
    public nombre:string;
    public cantidad:number;

    constructor(id: number, nombre: string, cantidad: number){

        this.id = id;
        this.nombre = nombre;
        this.cantidad = cantidad;

    }
}