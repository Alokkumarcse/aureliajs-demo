import "./jobs.css";

import { jobDetails } from "../../../services/job-details";
export class Jobs {
  constructor() {
    this.job = "jobs";
    this.jobDetails = jobDetails;
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
      setTimeout((_) => resolve(), 300);
    });
    console.log(this.jobDetails);
    return promise;
  }
}
