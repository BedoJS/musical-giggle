import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnyComponentComponent } from './components/any-component/any-component.component';

const routes: Routes = [
  {
    path: 'any',
    component: AnyComponentComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyLoadedRoutingModule { }
