import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component'
import { PageDefaultComponent } from './page-default/page-default.component'

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'default', component: PageDefaultComponent },
    { path: '**', redirectTo: 'default' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
