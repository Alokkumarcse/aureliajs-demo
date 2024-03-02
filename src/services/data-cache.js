import { singleton, transient } from "aurelia-framework";

@transient()
export class DataCache {
  constructor() {
    this.data = [];
    console.log("from dataCache constructor");
  }
}
