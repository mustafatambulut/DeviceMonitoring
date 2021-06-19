import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './pages/auth/auth.component';
import { AuthGuard } from './pages/auth/auth.guard'
import { LoginComponent } from './pages/auth/login/login.component'
import { DashboardComponent } from './pages/dashboard/dashboard.component'
import { LandingComponent } from './pages/landing/landing.component'

const routes: Routes = [
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      { path: '', component: LoginComponent },
      { path: 'login', component: LoginComponent }
    ]
  },
  { path: 'landing', component: LandingComponent },
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    component: DashboardComponent
  },
  { path: '', redirectTo: 'landing', pathMatch: 'full' }
]

const config: ExtraOptions = {
  useHash: false
}

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule]
})
export class AppRoutingModule {}