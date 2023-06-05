import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { LayoutComponent } from './components/layout/layout.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LayoutComponent
  ],
  providers: [],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [
    LayoutComponent,
    CommonModule,
    BrowserModule,
    HttpClientModule,
  ]
})
export class CoreModule { }
