import { Injectable } from "@angular/core";
import { State } from "@ngxs/store";;

export class MainStateStateModel {
  public userToken!: string | null;
}

const defaults = {
  userToken: '',
};
@State<MainStateStateModel>({
  name: 'mainstate',
  defaults,
})

@Injectable()
export class MainState {

}


