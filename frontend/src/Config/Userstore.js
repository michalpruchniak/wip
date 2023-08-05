import { observable, action, makeObservable } from "mobx";

class Users {
  users = observable.array([]);

  constructor() {
    makeObservable(this, {
      users: observable,
      storeUsers: action,
      delUser: action,
    });
  }

  storeUsers(users) {
    this.users.replace(users);
  }

  delUser(id) {
    this.users.replace(this.users.filter((user) => user.id !== id));
  }
}

const UsersStore = new Users();
export default UsersStore;
