export class Producto {
    public nombre:string;
    public stock:number;
    public dateCreated:Date;

    constructor( nombre: string, stock: number){

        
        this.nombre = nombre;
        this.stock = stock;
        this.dateCreated = new Date();

    }
}