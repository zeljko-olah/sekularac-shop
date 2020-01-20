// export class CounterStore {
//   @observable
//   count = 0;

//   @action
//   increment() {
//     this.count++;
//   }

//   @action
//   decrement() {
//     this.count--;
//   }

//   @computed
//   get doubleCount() {
//     return this.count * 2;
//   }
// }

export const CounterStore = {
  count: 0,

  increment() {
    this.count++;
  },

  decrement() {
    this.count--;
  },
  get doubleCount() {
    return this.count * 2;
  }
};
