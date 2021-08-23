import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { Authenticate, Logout } from '../../state/auth.actions';

@Component({
  selector: 'app-auth-lazy',
  templateUrl: './auth-lazy.component.html',
  styleUrls: ['./auth-lazy.component.scss']
})
export class AuthLazyComponent implements OnInit {


  ngOnInit(): void {
  }
  form = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });
  constructor (private store: Store) { }
  login(): void {
    console.log(this.form.getRawValue());
    this.store.dispatch(new Authenticate(this.form.controls.username.value, this.form.controls.password.value))
  }
  logout() {
    this.store.dispatch(new Logout())
  }

}
