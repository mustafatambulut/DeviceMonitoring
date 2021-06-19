import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgaModule } from 'src/app/@core/nga.module';
import { RouterModule } from '@angular/router';
import { LandingComponent } from './landing.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgaModule.forRoot(),
  ],
  entryComponents: [],
  declarations: [LandingComponent],
  exports: [LandingComponent],
  providers: [],
}) 
export class LandingModule {}