import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LayoutComponent } from './components/layout/layout.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LayoutComponent
  ],
  providers: [],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    LayoutComponent,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
  ]
})
export class CoreModule { }
