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

  addItem(item) {
    this.cache.data.push(item);
  }

  submit = () => {
    console.log("submitted");
    alert(`message submitted ${this.input}`);
    return;
  };
}
