import "./loading-indicator.css";

import { bindable, bindingMode } from "aurelia-framework";

export class LoadingIndicator {
  @bindable({ defaultBindingMode: bindingMode.twoWay }) loading = false;
  activate() {
    console.log("Loading Indicator :: Activated");
  }
}
