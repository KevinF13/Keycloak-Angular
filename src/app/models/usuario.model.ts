export class UsuarioModel{
    id?: string;
    nombre?: string;
    password?: string;
    estado?: boolean;

    constructor(){
        this.estado = true;
    }
}