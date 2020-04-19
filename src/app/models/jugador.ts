export class Jugador{
    constructor(
        public id:number,
        public cedula:string,
        public nombre:string,
        public apellido:string,
        public telefono:string,
        public posicion_juego:string,
        public numero:number,
        public fecha_nacimiento:Date,
        public imagen:File,
        public equipo_id:number
    ){

    }
}