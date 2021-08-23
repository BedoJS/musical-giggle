export class LazyAction {
  static readonly type = '[Lazy] Add item';
  constructor(public payload: string) { }
}
