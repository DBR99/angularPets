import {LOCALE_ID, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HistoryRoutingModule} from './history-routing.module';
import {HistoryComponent} from './history/history.component';
import {PetInfoComponent} from './pet-info/pet-info.component';
import {ItemComponent} from './item/item.component';
import {PrimengModule} from '../../shared/primeng/primeng.module';

@NgModule({
  declarations: [
    HistoryComponent,
    PetInfoComponent,
    ItemComponent
  ],
  imports: [
    CommonModule,
    HistoryRoutingModule,
    PrimengModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'es'}]
})
export class HistoryModule {
}
