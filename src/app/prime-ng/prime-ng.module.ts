import { ButtonModule } from 'primeng/button';
import { NgModule } from '@angular/core';
import {CardModule} from 'primeng/card';
import {FieldsetModule} from 'primeng/fieldset';
import {MenubarModule} from 'primeng/menubar'
import {PanelModule} from 'primeng/panel';

@NgModule({
  imports: [],
  exports: [
    ButtonModule,
    CardModule,
    FieldsetModule,
    MenubarModule,
    PanelModule
    ],

})
export class PrimeNgModule { }
