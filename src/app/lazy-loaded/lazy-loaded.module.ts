import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxsModule } from '@ngxs/store/';
import { LazyState } from './state/lazy.state';
import { AnyComponentComponent } from './components/any-component/any-component.component';
import { LazyLoadedRoutingModule } from './lazy-loaded-routing.module';


@NgModule({
  declarations: [
    AnyComponentComponent
  ],
  imports: [
    CommonModule,
    NgxsModule.forFeature([LazyState]),
    LazyLoadedRoutingModule
  ]
})
export class LazyLoadedModule { }
