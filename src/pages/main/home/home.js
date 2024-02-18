export class Home {
  constructor() {
    this.message = "Hello World!";
    this.input = "";
    this.home = "Home";
  }

  submit = () => {
    console.log("submitted");
    alert(`message submitted ${this.input}`);
    return;
  };
}
