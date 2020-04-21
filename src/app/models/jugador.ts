export class Jugador{
    constructor(
        public id:number,
        public cedula:string,
        public nombrejugador:string,
        public apellido:string,
        public telefono:string,
        public posicion_juego:string,
        public numero:number,
        public fecha_nacimiento:Date,
        public imagen:string,
        public equipo_id:number,
        public aux?:number
    ){

    }
}