import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from 'src/app/app.component';
import { NgaModule } from 'src/app/@core/nga.module';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthComponent } from './auth.component';
import { ToastrService } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgaModule.forRoot(),
  ],
  entryComponents: [],
  declarations: [LoginComponent, AuthComponent],
  exports: [LoginComponent, AuthComponent],
  providers: [ToastrService],
  bootstrap: [AppComponent],
})
export class AuthModule {}
