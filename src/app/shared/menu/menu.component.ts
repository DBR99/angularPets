import {Component, Input, OnInit} from '@angular/core';
import {IMenu} from './IMenu';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Input() display: boolean;
  @Input() showHeaderMenu = true;

  menuItems = new Array<IMenu>();

  constructor(
              private router: Router) {
    this.menuItems = [
      {
        label: 'Métricas',
        icon: 'icon-insert_chart',
        route: 'home'
      },
      {
        label: 'Proyectos',
        icon: 'icon-now_widgets',
        route: 'proyecto'
      },
      {
        label: 'Contratos',
        icon: ' icon-library_books',
        route: 'contrato'
      },
      {
        label: 'Municipios',
        icon: 'icon-map',
        route: 'municipio'
      },
      {
        label: 'Administración',
        icon: 'icon-cog',
        route: 'administracion'
      }
    ];
  }


  ngOnInit(): void {
  }

}
