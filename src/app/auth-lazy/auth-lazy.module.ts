import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthState } from './state/auth.state';
import { NgxsModule } from '@ngxs/store';
import { AuthLazyComponent } from './components/auth-lazy/auth-lazy.component';
import { AuthLazyRoutingModule } from './auth-lazy-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [
    AuthLazyComponent
  ],
  imports: [
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
    NgxsModule.forFeature([AuthState]),
    AuthLazyRoutingModule

  ]
})
export class AuthLazyModule { }
