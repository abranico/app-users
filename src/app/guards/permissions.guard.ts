import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRouteSnapshot ,CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PermissionsGuard implements CanActivate {
  constructor(private router: Router, private _snackBar: MatSnackBar){}
  acceso: boolean = false
  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.acceso == true){
      return true;
    }
    this.router.navigate([''])
    this._snackBar.open('Debes iniciar sesión para poder ingresar', '', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: ['red-snackbar']

    })
    return false

  }

  hasUser(){
    this.acceso = true
  }

  logout(){
    this.acceso = false
  }


}
