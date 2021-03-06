import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthComponent} from './main-content/registration-page/auth/auth.component';
import {MainPageComponent} from './main-content/main-page/main-page.component';
import {RegistrationComponent} from './main-content/registration-page/registration/registration.component';
import {RoutingGuard} from './shared/guard/routing.guard';


const routes: Routes = [
  {path: '', component: RegistrationComponent},
  {path: 'auth', component: AuthComponent, canActivate: [RoutingGuard]},
  {path: 'main', component: MainPageComponent, canActivate: [RoutingGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
