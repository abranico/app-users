import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { PermissionsGuard } from 'src/app/guards/permissions.guard';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loading = false
  form: FormGroup;

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar, private router: Router, private _permissionsGuard: PermissionsGuard) {
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
      this._permissionsGuard.hasUser()
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
      verticalPosition: 'bottom',
      panelClass: ['red-snackbar']
    })
  }

  fakeLogin(){
    this.loading = true

    setTimeout(()=>{
      this.router.navigate(['dashboard'])
    },1500)
  }

}
