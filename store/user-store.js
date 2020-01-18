import { action, computed, observable } from "mobx";

export class UserStore {
  @observable
  user = null;

  @action
  login() {
    this.user = {
      id: 1,
      name: "Zeljko",
      lastname: "Olah",
      role: "admin"
    };
  }

  @action
  logout() {
    this.user = null;
  }

  @computed
  get greeting() {
    if (!this.user) {
      return "Hello Guest!";
    }
    return `Hello ${this.user.name} ${this.user.lastname}!`;
  }
}
