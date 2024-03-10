import { inject } from "aurelia-framework";

import { User } from "../../../models/user/user-model";
import { DataCache } from "../../../services/data-cache";

@inject(DataCache)
export class Users {
  constructor(dataCache) {
    this.user = new User("Alok", 26);
    this.dataCache = dataCache;
    console.log(this.dataCache);
    console.log(this.user, "user");
  }

  activate(params, routeConfig) {
    console.log(params, "params");
    this.user = this.dataCache.getUser(parseInt(params.id));
    console.log(this.user);
  }

  greet() {
    alert(`Hello, ${this.user.userName}!`);
  }

  increaseAge() {
    this.user.age++;
  }
}
