import { singleton, transient } from "aurelia-framework";
import { UsersData } from "./user-info-services";

@singleton()
export class DataCache {
  constructor() {
    this.data = [];
    this.userData = UsersData;
    console.log("from dataCache constructor");
  }

  //making api call to get users data
  getUsers() {
    var promise = new Promise((resolve, reject) => {
      if (!this.userData) {
        setTimeout(() => {
          this.userData = UsersData;
          resolve(this.userData);
        }, 2000);
      } else {
        resolve(this.userData);
      }
    });
    return promise;
  }

  // making api call to get a single user data
  getUser(userId) {
    return this.userData.find((item) => item.id === userId);
  }
}
