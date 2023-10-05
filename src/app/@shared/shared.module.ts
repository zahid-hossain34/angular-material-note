import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkeletonLoaderComponent } from './skeleton-loader/skeleton-loader.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatGridListModule
  ],
  declarations: [SkeletonLoaderComponent],
  exports: [SkeletonLoaderComponent]
})
export class SharedModule { }
