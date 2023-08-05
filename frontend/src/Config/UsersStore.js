import { observable, action, makeObservable } from "mobx";

class UsersStore {
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

const store = new UsersStore();
export default store;
