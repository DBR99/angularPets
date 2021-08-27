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

  constructor() {
    this.menuItems = [
      {
        label: 'Historia clinica',
        icon: 'icon-cat',
        route: 'home'
      },
      {
        label: 'Citas',
        icon: 'icon-date_range',
        route: 'citas'
      },
      {
        label: 'Info pet',
        icon: ' icon-pets',
        route: 'pet'
      }
    ];
  }

  ngOnInit(): void {
  }
}
