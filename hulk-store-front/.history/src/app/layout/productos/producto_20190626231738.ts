export class Producto {
    public id:number;
    public name:string;
    public stock:number;
    public dateCreated:Date;

    constructor(id:number, name: string, stock: number){

        
        this.name = name;
        this.stock = stock;
        this.dateCreated = new Date();

    }
}