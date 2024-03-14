import "./app-navbar.css";

import { bindingMode, bindable } from "aurelia-framework";

export class AppNavbar {
  @bindable({ defaultBindingMode: bindingMode.toView }) router = "";
}
