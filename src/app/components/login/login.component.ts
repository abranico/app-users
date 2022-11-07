import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loading = false
  form: FormGroup;

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar) {
    this.form = this.fb.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  ingresar(){
    const usuario = this.form.value.usuario
    const password = this.form.value.password
    if(usuario == 'admin' && password == 'admin123'){
      this.fakeLogin()
    }
    else{
      this.error()
      this.form.reset()
    }
  }

  error(){
    this._snackBar.open('El usuario o contraseña ingresado es invalido', '', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }

  fakeLogin(){
    this.loading = true

    setTimeout(()=>{
      this.loading = false
    },1500)
  }

}