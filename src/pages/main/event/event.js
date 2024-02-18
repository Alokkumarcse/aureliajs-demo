export class Event {
  constructor() {
    this.event = "Event";
  }
  activate(task) {
    this.item = task;
    console.log(task, "task");
  }
}
