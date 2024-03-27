import "./home.css";

import { inject } from "aurelia-framework";
import { PLATFORM } from "aurelia-pal";

import { DataCache } from "../../../services/data-cache";

@inject(DataCache)
export class Home {
  constructor(dataCache) {
    this.cache = dataCache;
    this.addItem("newItem");
  }

  activate(params, routeConfig, navigationInstruction) {
    // added an arbitrary time delay to show an spinning cog while loading the routed page
    let promise = new Promise((resolve, reject) => {
      setTimeout((_) => resolve(), 50);
    });
    return promise;
  }

  configureRouter(config, router) {
    this.router = router;
    config.options.pushState = true;
    // config.title = "Home";
    config.map([
      {
        route: "",
        moduleId: PLATFORM.moduleName("./main/main", "main"),
        nav: true,
        name: "main",
        title: "Main",
        href: "home",
      },
      {
        route: "about",
        moduleId: PLATFORM.moduleName("./about/about", "about"),
        nav: true,
        name: "about",
        title: "About",
        href: "home/about",
      },
      {
        route: "profile",
        moduleId: PLATFORM.moduleName("./profile/profile", "profile"),
        nav: true,
        name: "profile",
        title: "Profile",
        href: "home/profile",
      },
      {
        route: "store",
        moduleId: PLATFORM.moduleName("./store/store", "store"),
        name: "store",
        title: "Store",
        nav: true,
        href: "home/store",
      },
    ]);
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
