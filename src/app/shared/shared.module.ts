import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MenuComponent} from './menu/menu.component';
import {BreadcrumbComponent} from './breadcrumb/breadcrumb.component';
import {RouterModule} from '@angular/router';
import {PrimengModule} from './primeng/primeng.module';
import {TopCardComponent} from './top-card/top-card.component';

@NgModule({
    declarations: [
        MenuComponent,
        BreadcrumbComponent,
        TopCardComponent
    ],
    exports: [
        MenuComponent,
        BreadcrumbComponent,
        PrimengModule,
        TopCardComponent
    ],
  imports: [
    CommonModule,
    RouterModule,
    PrimengModule
  ]
})
export class SharedModule {
}
