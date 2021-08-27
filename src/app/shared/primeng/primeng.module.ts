import {NgModule} from '@angular/core';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {DialogModule} from 'primeng/dialog';
import {TooltipModule} from 'primeng/tooltip';
import {RadioButtonModule} from 'primeng/radiobutton';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ToastModule} from 'primeng/toast';
import {MessagesModule} from 'primeng/messages';
import {AccordionModule} from 'primeng/accordion';


@NgModule({
  declarations: [],
  imports: [
    InputTextModule,
    ButtonModule,
    ScrollPanelModule,
    OverlayPanelModule,
    DialogModule,
    TooltipModule,
    RadioButtonModule,
    ConfirmDialogModule,
    ToastModule,
    MessagesModule,
    AccordionModule
  ],
  exports: [
    InputTextModule,
    ButtonModule,
    ScrollPanelModule,
    OverlayPanelModule,
    DialogModule,
    TooltipModule,
    RadioButtonModule,
    ConfirmDialogModule,
    ToastModule,
    MessagesModule,
    AccordionModule
  ]
})
export class PrimengModule {
}
