import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuarios: Usuario[] = [
    {usuario: "lionel10", nombre: "Lionel", apellido: "Messi", genero: "Masculino"},
    {usuario: "dima", nombre: "Ángel", apellido: "Di María", genero: "Masculino"},
    {usuario: "papu", nombre: "Alejandro", apellido: "Gómez", genero: "Masculino"},
    {usuario: "paulo", nombre: "Paulo", apellido: "Dybala", genero: "Masculino"},
    {usuario: "dibu", nombre: "Emiliano", apellido: "Martínez", genero: "Masculino"},

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
