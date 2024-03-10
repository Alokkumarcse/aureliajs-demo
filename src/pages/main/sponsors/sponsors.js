import { inject } from "aurelia-framework";
import { Router } from "aurelia-router";

import { DataCache } from "../../../services/data-cache";
@inject(DataCache, Router)
export class Sponsors {
  constructor(dataCache, router) {
    this.dataCache = dataCache;
    this.router = router;
    this.sponsors = "Sponsors component";
    this.usersData = [];
  }

  async activate() {
    this.usersData = await this.dataCache.getUsers();
    this.usersData.forEach(
      (item) => (item.detailUrl = this.router.generate("User", { id: item.id }))
    );
    console.log(this.usersData);
  }
}
