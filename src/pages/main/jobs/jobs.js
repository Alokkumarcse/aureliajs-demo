import "./jobs.css";
export class Jobs {
  constructor() {
    this.job = "jobs";
  }

  //canActivate life cycle help to reject to navigation to route
  // canActivate(params, routeConfig, navigationInstruction) {
  //   // added an arbitrary time delay to show an spinning cog while loading the routed page
  //   let promise = new Promise((resolve, reject) => {
  //     setTimeout((_) => resolve(false), 1000);
  //   });
  //   return promise;
  // }

  activate() {
    // added an arbitrary time delay to show an spinning cog while loading the routed page
    let promise = new Promise((resolve, reject) => {
      setTimeout((_) => resolve(), 2000);
    });
    return promise;
  }
}
