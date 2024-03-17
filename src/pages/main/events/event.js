export class Event {
  constructor() {
    this.event = "Event";
  }
  activate(task) {
    this.item = task;
    console.log(task, "task");
    // added an arbitrary time delay to show an spinning cog while loading the routed page
    // let promise = new Promise((resolve, reject) => {
    //   setTimeout((_) => resolve(), 6000);
    // });
    // return promise;
  }
}
