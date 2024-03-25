import "./app.css";

import { PLATFORM } from "aurelia-pal";

export class App {
  constructor() {
    this.name = "Alok";
  }

  // Defining routes for Router
  configureRouter(config, router) {
    this.router = router; // router reference
    // used for HTML5 history api-based routing and eliminate the # routing
    config.options.pushState = true;
    config.title = "AV Ventures";
    config.map([
      {
        route: ["", "home"],
        moduleId: PLATFORM.moduleName("../main/home/home", "home"),
        name: "Home",
        nav: true,
        title: "Home",
      },
      {
        route: "jobs",
        moduleId: PLATFORM.moduleName("../main/jobs/jobs", "jobs"),
        name: "Jobs",
        title: "Jobs",
        nav: true,
      },
      {
        route: "sponsors",
        moduleId: PLATFORM.moduleName("../main/sponsors/sponsors", "sponsors"),
        name: "Sponsors",
        title: "Sponsors",
        nav: true,
      },
      {
        route: "events",
        moduleId: PLATFORM.moduleName("../main/events/events", "events"),
        name: "Events",
        title: "Events",
        nav: true,
      },
      {
        route: "discussion",
        moduleId: PLATFORM.moduleName(
          "../main/discussion/discussion",
          "discussion"
        ),
        name: "Discussion",
        title: "Discussion",
        nav: true,
      },
      {
        route: "user/:id",
        moduleId: PLATFORM.moduleName("../main/user/user", "user"),
        name: "User",
        title: "User",
      },
    ]);

    // handling unknown routes
    config.mapUnknownRoutes((instruction) => {
      console.log(instruction, "from handling unknown routes");
      return {
        name: "not-found",
        moduleId: PLATFORM.moduleName("../main/not-found/not-found"),
        title: "404:Page Not Found",
      };
    });
  }
}
