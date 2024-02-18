// ViewModel
import { User } from "../../models/user-model";

export class UserViewModel {
  constructor() {
    this.user = new User("John Doe", 30);
    console.log(this.user, "user");
  }

  greet() {
    alert(`Hello, ${this.user.name}!`);
  }

  increaseAge() {
    this.user.age++;
  }
}
