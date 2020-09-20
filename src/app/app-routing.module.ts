import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { Page404Component } from './page404/page404.component';
import { ProductComponent } from './product/product.component';
import { ServiceComponent } from './service/service.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthorizationGuard } from './authorization.guard';

const routes: Routes = [
  {path: '', redirectTo: '/homepage', pathMatch: 'full' },
  {path: 'homepage', component: HomepageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'aboutus', component: AboutUsComponent},
  {path: 'product', component: ProductComponent},
  {path: 'service', component: ServiceComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthorizationGuard]},
  {path: '**', component: Page404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
