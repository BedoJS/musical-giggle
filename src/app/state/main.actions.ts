export class Authenticate {
  static readonly type = 'Login with username and password';
  constructor(public username: string, public password: string) {}
}
