export class Jobs {
  constructor() {
    this.job = "jobs";
  }

  activate() {
    // added an arbitrary time delay to show an spinning cog while loading the routed page
    let promise = new Promise((resolve, reject) => {
      setTimeout((_) => resolve(), 2000);
    });
    return promise;
  }
}
