import { bindable, bindingMode } from "aurelia-framework";

function getDiscussionInput() {
  //fake data access
  return "";
}

function cloneObject(obj) {
  return JSON.parse(JSON.stringify(obj));
}

export class Discussion {
  @bindable({ defaultBinding: bindingMode.twoWay }) discussionInput;
  constructor() {
    this.discussion = "Discussion";
    this.discussionInput = "please input here";
  }

  // acnActivate() method
  canActivate() {
    console.log("Discussion about to activate");
    return true;
  }

  // add activate() method to populate initial Data
  activate() {
    this.discussionInput = getDiscussionInput();
    this.originalInput = cloneObject(this.discussionInput);
  }

  //simulate save
  save() {
    this.originalInput = cloneObject(this.discussionInput);
    confirm("Input saved successfully");
    this.discussionInput = "please input here";
  }

  // add canDeactivate() method to compares the current input from the user against the
  // original input. And if they're different then we have dirty data in the current view
  // so we want to prompt the user to decide what to do about that
  // whether to allow navigation or to cancel it.
  canDeactivate() {
    if (
      JSON.stringify(cloneObject(this.discussionInput)) !==
      JSON.stringify(this.originalInput)
    ) {
      if (confirm("Unsaved data, are you sure you want to navigate away?")) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  // deactivate() method takes no arguments and perform the clean up the viewModel
  deactivate() {
    console.log("Discussion deactivated");
  }
}
