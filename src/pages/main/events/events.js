import { inject } from "aurelia-framework";

import { DataCache } from "../../../services/data-cache";

@inject(DataCache)
export class Events {
  constructor(dataCache) {
    this.name = "Events component";
    this.events = [
      { id: "1", name: "task1" },
      { id: "2", name: "task2" },
      { id: "3", name: "task3" },
      { id: "4", name: "task4" },
      { id: "5", name: "task5" },
    ];
    this.cache = dataCache;
    this.cache.data.push("Aurelia.js");
    this.cache.data.push("React.js");
    console.log(this.cache);
  }

  activate() {
    // added an arbitrary time delay to show an spinning cog while loading the routed page
    let promise = new Promise((resolve, reject) => {
      setTimeout((_) => resolve(), 1000);
    });
    return promise;
  }
}
