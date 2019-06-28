export class Venta{
    id:number;
    productJson:string;
    totalSell:number;
    dateCreated:Date;

    constructor(id:number, prodctJson:string, totalSell:number, dateCreated:Date){
        this.id=id;
        this.productJson=prodctJson;
        this.totalSell=totalSell;
        this.dateCreated = dateCreated;
    }
}