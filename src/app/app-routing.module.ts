import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthLazyComponent } from './auth-lazy/components/auth-lazy/auth-lazy.component';

const routes: Routes = [
  // { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
  {
    path: 'app',
    component: AppComponent,
    children: [
      {
        path: 'lazy',
        loadChildren: () =>
          import('./lazy-loaded/lazy-loaded.module').then((m) => m.LazyLoadedModule),
      },

    ],
  },
  {
    path: 'auth',
    component: AuthLazyComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./auth-lazy/auth-lazy.module').then((m) => m.AuthLazyModule),
      },

    ],
  },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
