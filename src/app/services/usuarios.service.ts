import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UsuarioModel } from '../models/usuario.model';


const URL = environment.urlServer;

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }

  crearUsuarios(usuarios: UsuarioModel){
    return this.http.post(`${URL}/usuarios.json`, usuarios);
  }

}
