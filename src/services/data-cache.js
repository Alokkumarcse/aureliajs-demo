import { singleton, transient } from "aurelia-framework";

@singleton()
export class DataCache {
  constructor() {
    this.data = [];
    console.log("from dataCache constructor");
  }
}
