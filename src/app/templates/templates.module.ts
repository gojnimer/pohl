import { TemplatesRoutingModule } from './templates-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FluidComponent } from './fluid/fluid.component';



@NgModule({
  declarations: [FluidComponent],
  imports: [
    CommonModule,
    TemplatesRoutingModule
  ]
})
export class TemplatesModule { }
