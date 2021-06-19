import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgaModule } from './@core/nga.module';
import { LoaderService } from './@core/services/services/loader.service';
import { LoaderInterceptor } from './@core/services/interceptor/loader.interceptor';
import { AuthModule } from './pages/auth/auth.module';
import { LandingModule } from './pages/landing/landing.module';
import { DashboardModule } from './pages/dashboard/dashboard.module';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AuthModule,
    LandingModule,
    DashboardModule,
    ToastrModule.forRoot(),
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgaModule.forRoot(),
  ],
  providers: [
    LoaderService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true,
    },
    {provide: ToastrService, useClass: ToastrService}
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
