export class Arbitraje{
    constructor(
        //atributos
        public fecha:Date,
        public valor_cancelado:Float32Array,
        public valor_restante:Float32Array,
        public jugador_id:number
    ){

    }
}