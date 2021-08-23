import { Injectable } from '@angular/core';
import { State, Action, StateContext } from '@ngxs/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { MainService } from 'src/app/service/main.service';
import { MainStateStateModel } from 'src/app/state/main.state';
import { AuthAction, Authenticate, Logout } from './auth.actions';

export class AuthStateModel {
  public userToken!: string | null;
}

const defaults = {
  userToken: '',
};
@State<AuthStateModel>({
  name: 'auth',
  defaults
})
@Injectable()
export class AuthState {

  constructor (private mainService: MainService) { }


  @Action(Authenticate)
  auth({ getState, setState }: StateContext<MainStateStateModel>, { username, password }: Authenticate): Observable<string> {
    return this.mainService.login(username, password).pipe(
      tap((res: any) => {
        console.log(res);

        const state = getState();
        setState({
          ...state,
          userToken: res
        });
        console.log({ state });

      })
    );
  }

  @Action(Logout)
  logout({ getState, setState }: StateContext<MainStateStateModel>): void {
    const state = getState();
    setState({
      ...state,
      userToken: 'etetetetet'
    });
  }

}
