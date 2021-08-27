import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  $breakpoints: Subscription;

  main = 'main';
  menu = 'menu';
  displayContent: boolean;
  showHeaderMenu: boolean;

  constructor(
  ) {
  }

  ngOnInit(): void {
  }

  collapseMenu() {
    this.main = this.main === 'main' ? 'main-collapse' : 'main';
    this.displayContent = !this.displayContent;
  }
}
