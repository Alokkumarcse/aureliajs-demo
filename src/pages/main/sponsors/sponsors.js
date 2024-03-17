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

  // Programmatic controlling navigation
  goToHome() {
    //one way
    // this.router.navigate("#/Home");
    this.router.navigateToRoute("Home");
    //another way to do this
    // this.router.navigateToRoute("User", { id: this.usersData[0].id });
  }

  // another way to do the same as above
  async activate() {
    this.usersData = await this.dataCache.getUsers();
    this.usersData.forEach(
      (item) => (item.detailUrl = this.router.generate("User", { id: item.id }))
    );
    console.log(this.usersData);
    // added an arbitrary time delay to show an spinning cog while loading the routed page
    let promise = await new Promise((resolve, reject) => {
      setTimeout(() => resolve(), 2000);
    });
    return promise;
  }
}
