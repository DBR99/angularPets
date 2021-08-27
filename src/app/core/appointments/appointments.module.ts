import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppointmentsRoutingModule } from './appointments-routing.module';
import { NewComponent } from './new/new.component';
import { ItemComponent } from './item/item.component';
import {PrimengModule} from '../../shared/primeng/primeng.module';


@NgModule({
  declarations: [
    NewComponent,
    ItemComponent
  ],
  imports: [
    CommonModule,
    AppointmentsRoutingModule,
    PrimengModule
  ]
})
export class AppointmentsModule { }
