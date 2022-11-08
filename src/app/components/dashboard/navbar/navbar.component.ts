import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/interfaces/menu';
import { MenuService } from 'src/app/services/menu.service';
import { PermissionsGuard } from 'src/app/guards/permissions.guard';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  menu: Menu[] = []

  constructor(private _menuService: MenuService, private _permissionsGuard: PermissionsGuard) { }

  ngOnInit(): void {
    this.cargarMenu()
  }

  cargarMenu(){
    this._menuService.getMenu().subscribe(data => {
      this.menu = data
    })
  }

  logout(){
    this._permissionsGuard.logout()
  }

}
