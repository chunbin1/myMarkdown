class Test {
  constructor() {
    let number = 0;
  }

  getNumber() {
    console.log(this.number);
  }
}

let temp = new Test();
temp.getNumber();
