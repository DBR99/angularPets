import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {MessageService} from 'primeng/api';

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
    private messageService: MessageService,
  ) {
  }

  ngOnInit(): void {
  }

  collapseMenu() {
    this.main = this.main === 'main' ? 'main-collapse' : 'main';
    this.displayContent = !this.displayContent;
  }

  onReject() {
    this.messageService.clear();

    this.messageService.add({
      severity: 'warn',
      summary: 'Respuesta de la petición',
      detail: 'Esta notificación permanecerá sin completar'
    });
  }

  onConfirm() {
    this.messageService.clear();

    this.messageService.add({
      severity: 'success',
      summary: 'Respuesta de la petición',
      detail: 'Reintento enviado con éxito'
    });
  }
}
