import environment from "../config/environment.json";
import { PLATFORM } from "aurelia-pal";
import { App } from "./pages/app/app";

export async function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .feature(PLATFORM.moduleName("resources/index"));

  aurelia.use.developmentLogging(environment.debug ? "debug" : "warn");

  if (environment.testing) {
    aurelia.use.plugin(PLATFORM.moduleName("aurelia-testing"));
  }

  await aurelia.start();
  await aurelia.setRoot(PLATFORM.moduleName(App));
}
