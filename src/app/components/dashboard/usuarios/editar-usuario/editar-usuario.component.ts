import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {

  generos: any[] = ['Masculino','Femenino'];
  form:FormGroup;

  constructor(private fb: FormBuilder, private _usuarioService: UsuarioService, private router: Router, private _snackBar: MatSnackBar) {

    this.form = this.fb.group({
      usuario: [`${this._usuarioService.usuarioActual.usuario}`, Validators.required],
      nombre: [`${this._usuarioService.usuarioActual.nombre}`, Validators.required],
      apellido: [`${this._usuarioService.usuarioActual.apellido}`, Validators.required],
      genero: [`${this._usuarioService.usuarioActual.genero}`, Validators.required]
    })

   }

  ngOnInit(): void {

  }

editarUsuario(){
  const user: Usuario = {
   usuario: this.form.value.usuario,
   nombre: this.form.value.nombre,
   apellido: this.form.value.apellido,
   genero: this.form.value.genero,
  }
  this._usuarioService.editarUsuario(user)
  this.router.navigate(['/dashboard/usuarios'])
  this._snackBar.open('El usuario fue editado con éxito', '', {
    duration: 5000,
    horizontalPosition: 'center',
    verticalPosition: 'bottom',
    panelClass: ['green-snackbar']
    })
}

}
