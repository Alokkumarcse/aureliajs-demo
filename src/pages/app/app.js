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
        viewPorts: {
          mainContent: {
            moduleId: PLATFORM.moduleName("../main/home/home", "home"),
          },
          sideBar: {
            moduleId: PLATFORM.moduleName(
              "../sidebars/left-sidebar/leftSidebar",
              "left sidebar"
            ),
          },
        },
        name: "Home",
        nav: true,
        title: "Home",
        settings: {},
      },
      {
        route: "jobs",
        viewPorts: {
          mainContent: {
            moduleId: PLATFORM.moduleName("../main/jobs/jobs", "jobs"),
          },
          sideBar: {
            moduleId: PLATFORM.moduleName(
              "../sidebars/left-sidebar/leftSidebar",
              "left sidebar"
            ),
          },
        },
        name: "Jobs",
        title: "Jobs",
        nav: true,
        settings: {},
      },
      {
        route: "sponsors",
        viewPorts: {
          mainContent: {
            moduleId: PLATFORM.moduleName(
              "../main/sponsors/sponsors",
              "sponsors"
            ),
          },
          sideBar: {
            moduleId: PLATFORM.moduleName(
              "../sidebars/left-sidebar/leftSidebar",
              "left sidebar"
            ),
          },
        },
        name: "Sponsors",
        title: "Sponsors",
        nav: true,
      },
      {
        route: "events",
        viewPorts: {
          mainContent: {
            moduleId: PLATFORM.moduleName("../main/events/events", "events"),
          },
          sideBar: {
            moduleId: PLATFORM.moduleName(
              "../sidebars/left-sidebar/leftSidebar",
              "left sidebar"
            ),
          },
        },
        name: "Events",
        title: "Events",
        nav: true,
      },
      {
        route: "discussion",
        viewPorts: {
          mainContent: {
            moduleId: PLATFORM.moduleName(
              "../main/discussion/discussion",
              "discussion"
            ),
          },
          sideBar: {
            moduleId: PLATFORM.moduleName(
              "../sidebars/left-sidebar/leftSidebar",
              "left sidebar"
            ),
          },
        },
        name: "Discussion",
        title: "Discussion",
        nav: true,
      },
      {
        route: "user/:id",
        viewPorts: {
          mainContent: {
            moduleId: PLATFORM.moduleName("../main/user/user", "user"),
          },
          sideBar: {
            moduleId: PLATFORM.moduleName(
              "../sidebars/left-sidebar/leftSidebar",
              "left sidebar"
            ),
          },
        },
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
