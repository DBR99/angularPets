import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PetRoutingModule} from './pet-routing.module';
import {NewComponent} from './new/new.component';
import {PrimengModule} from '../../shared/primeng/primeng.module';


@NgModule({
  declarations: [
    NewComponent
  ],
  imports: [
    CommonModule,
    PrimengModule,
    PetRoutingModule
  ]
})
export class PetModule {
}
