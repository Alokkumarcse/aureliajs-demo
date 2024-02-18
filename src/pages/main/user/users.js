// ViewModel
import { User } from "../../../models/user/user-model";

export class Users {
  constructor() {
    this.user = new User("Alok", 26);
    console.log(this.user, "user");
  }

  greet() {
    alert(`Hello, ${this.user.name}!`);
  }

  increaseAge() {
    this.user.age++;
  }
}
