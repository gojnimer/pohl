import { TemplateService } from './template.service';
import { TemplatesRoutingModule } from './templates-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FluidComponent } from './fluid/fluid.component';



@NgModule({
  declarations: [FluidComponent],
  imports: [
    CommonModule,
    TemplatesRoutingModule,
    HttpClientModule
  ],
  providers:[TemplateService]
})
export class TemplatesModule { }
