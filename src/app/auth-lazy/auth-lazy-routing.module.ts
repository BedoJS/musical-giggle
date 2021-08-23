import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLazyComponent } from './components/auth-lazy/auth-lazy.component';

const routes: Routes = [
  {
    path: 'auth',
    component: AuthLazyComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthLazyRoutingModule { }
