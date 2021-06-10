import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SucursalListComponent } from './sucursal/sucursal-list/sucursal-list.component';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    SucursalListComponent
  ],
  exports:[SucursalListComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgModule,
    BrowserModule
  ]
})
export class ComponentsModule { }
