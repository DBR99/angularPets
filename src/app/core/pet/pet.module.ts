import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PetRoutingModule} from './pet-routing.module';
import {NewComponent} from './new/new.component';
import {PrimengModule} from '../../shared/primeng/primeng.module';
import { InfoComponent } from './info/info.component';


@NgModule({
  declarations: [
    NewComponent,
    InfoComponent
  ],
  imports: [
    CommonModule,
    PrimengModule,
    PetRoutingModule
  ]
})
export class PetModule {
}
