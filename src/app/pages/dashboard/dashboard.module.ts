import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from 'src/app/app.component';
import { NgaModule } from 'src/app/@core/nga.module';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgaModule.forRoot(),
  ],
  entryComponents: [],
  declarations: [DashboardComponent],
  exports: [DashboardComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class DashboardModule {}
