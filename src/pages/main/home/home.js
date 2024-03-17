import { inject } from "aurelia-framework";

import { DataCache } from "../../../services/data-cache";

@inject(DataCache)
export class Home {
  constructor(dataCache) {
    this.message = "Hello World!";
    this.input = "";
    this.home = "Home";
    this.cache = dataCache;
    this.addItem("newItem");
  }

  activate(params, routeConfig, navigationInstruction) {
    // added an arbitrary time delay to show an spinning cog while loading the routed page
    let promise = new Promise((resolve, reject) => {
      setTimeout((_) => resolve(), 1000);
    });
    return promise;
  }

  addItem(item) {
    this.cache.data.push(item);
  }

  submit = () => {
    console.log("submitted");
    alert(`message submitted ${this.input}`);
    return;
  };
}
