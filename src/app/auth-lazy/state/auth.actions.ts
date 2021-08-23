export class AuthAction {
  static readonly type = '[Auth] Add item';
  constructor (public payload: string) { }
}
export class Authenticate {
  static readonly type = 'Login with username and password';
  constructor (public username: string, public password: string) { }
}
export class Logout {
  static readonly type = 'Logout';
  constructor () { }
}
