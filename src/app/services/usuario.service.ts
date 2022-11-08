import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuarios: Usuario[] = [
    {usuario: "jperes", nombre: "Juan", apellido: "Pérez", genero: "Masculino"},
    {usuario: "jperes", nombre: "Juan", apellido: "Pérez", genero: "Masculino"},
    {usuario: "jperes", nombre: "Juan", apellido: "Pérez", genero: "Masculino"},
    {usuario: "jperes", nombre: "Juan", apellido: "Pérez", genero: "Masculino"},
    {usuario: "jperes", nombre: "Juan", apellido: "Pérez", genero: "Masculino"},
  ];

  indexActual = 0

  usuarioActual: Usuario = {
    usuario: "",
    nombre: "",
    apellido: "",
    genero: ""

  }

  constructor() { }

  getUsuario(){
    return this.usuarios.slice()
  }

  eliminarUsuario(index: number){
    this.usuarios.splice(index, 1)
  }

  agregarUsuario(usuario: Usuario){
    this.usuarios.unshift(usuario)
  }

  targetUsuario(index: number){
     this.indexActual = index
     this.usuarioActual = this.usuarios[index]
  }

  editarUsuario(user: any){
    this.usuarios[this.indexActual] = user
  }
}
