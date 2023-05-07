export class persona{
    id?: number;
    nombre: string;
    apellido: string;
    img: string;

    constructor(nombre: String,apellido: String,img: String){
        this.nombre = nombre;
        this.apellido = apellido; 
        this.img = img;
    }

}