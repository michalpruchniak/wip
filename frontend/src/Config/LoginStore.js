import { observable, action, makeObservable } from "mobx";

class Login {
  user = {};

  constructor() {
    makeObservable(this, {
      user: observable,
      storeUser: action,
      logout: action,
    });
  }

  storeUser(user) {
    this.user = user;
  }

  logout(id) {
    this.user = {};
  }
}

const LoginStore = new Login();
export default LoginStore;
