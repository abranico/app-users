import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Route, Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {

  generos: any[] = ['Masculino','Femenino'];
  form:FormGroup;

  constructor(private fb: FormBuilder, private _usuarioService: UsuarioService, private router: Router, private _snackBar: MatSnackBar) {
    this.form = this.fb.group({
      usuario: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      genero: ['', Validators.required]
    })
   }
   colspan = 1
   colspanImg = true
   cols = 4

  ngOnInit(): void {
    if(window.innerWidth <= 768){
      this.cols = 6
      this.colspan = 6
      this.colspanImg = false
    }
  }

  agregarUsuario(){
    const user: Usuario = {
      usuario: this.form.value.usuario,
      nombre: this.form.value.nombre,
      apellido: this.form.value.apellido,
      genero: this.form.value.genero,
    }
    this._usuarioService.agregarUsuario(user)
    this.router.navigate(['/dashboard/usuarios'])
    this._snackBar.open('El usuario fue agregado con éxito', '', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: ['green-snackbar']
    })
  }

}
