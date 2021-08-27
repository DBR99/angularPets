import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MenuComponent} from './menu/menu.component';
import {BreadcrumbComponent} from './breadcrumb/breadcrumb.component';
import {RouterModule} from '@angular/router';
import {PrimengModule} from './primeng/primeng.module';

@NgModule({
  declarations: [
    MenuComponent,
    BreadcrumbComponent
  ],
  exports: [
    MenuComponent,
    BreadcrumbComponent,
    PrimengModule
  ],
  imports: [
    CommonModule,
    RouterModule,
    PrimengModule
  ]
})
export class SharedModule {
}
