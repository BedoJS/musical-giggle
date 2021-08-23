import { Injectable } from '@angular/core';
import { State, Action, StateContext } from '@ngxs/store';
import { LazyAction } from './lazy.actions';

export class LazyStateModel {
  public items!: string[];
}

const defaults = {
  items: []
};

@State<LazyStateModel>({
  name: 'lazy',
  defaults
})
@Injectable()
export class LazyState {
  @Action(LazyAction)
  add({ getState, setState }: StateContext<LazyStateModel>, { payload }: LazyAction) {
    const state = getState();
    setState({ items: [...state.items, payload] });
  }
}
