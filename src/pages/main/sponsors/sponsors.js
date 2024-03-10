import { inject } from "aurelia-framework";

import { DataCache } from "../../../services/data-cache";
@inject(DataCache)
export class Sponsors {
  constructor(dataCache) {
    this.sponsors = "Sponsors component";
    this.dataCache = dataCache;
    this.usersData = [];
  }

  async activate() {
    this.usersData = await this.dataCache.getUsers();
    console.log(this.usersData);
  }
}
