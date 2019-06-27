export class Producto {
    public name:string;
    public stock:number;
    public dateCreated:Date;

    constructor( name: string, stock: number){

        
        this.name = name;
        this.stock = stock;
        this.dateCreated = new Date();

    }
}