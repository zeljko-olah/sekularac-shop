import { action, observable } from "mobx";

export class ThemeStore {
  @observable
  theme = "light";

  @action
  setTheme(newTheme) {
    this.theme = newTheme;
  }
}
