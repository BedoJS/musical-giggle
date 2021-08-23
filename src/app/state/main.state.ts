import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { Observable } from "rxjs";
import { MainService } from "../service/main.service";
import { Authenticate } from "./main.actions";
import { tap } from 'rxjs/operators';

export class MainStateStateModel {
  public userToken!: string | null;
}

const defaults = {
  userToken: '',
};
@State<MainStateStateModel>({
  name: 'tenders',
  defaults,
})

@Injectable()
export class MainState {
  constructor(private mainService: MainService) {}
  @Selector()
  static getAttachment(state: MainStateStateModel): any {
    return state.userToken;
  }

  @Action(Authenticate)
  getTenderById({getState, setState}: StateContext<MainStateStateModel>, {username, password}: Authenticate): Observable<string> {
    return this.mainService.login(username, password).pipe(
      tap((res: any) => {
        const state = getState();
        setState({
          ...state,
          userToken: res
        });
      })
    );
  }
}


