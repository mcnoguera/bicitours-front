

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SegurosListaComponent } from './seguros-lista/seguros-lista.component';
import { SeguroService } from './seguro.service';
import{SegurosRoutingModule}  from './seguros-routing.module';

@NgModule({
  imports: [CommonModule,SegurosRoutingModule],
  declarations: [SegurosListaComponent],
  exports: [SegurosListaComponent],
  providers: [SeguroService]

})
export class SegurosModule { }