export class Animal {
  constructor(public name: string) { }

  move() {
    console.log('Moving along!');
  }

  greeting() {
    return `Hello, I'm ${this.name}`;
  }
}

export class Dog extends Animal {
  constructor(
    name: string,
    public owner: string,
  ){
    super(name);
  }
  woof(times: number): void {
    for (let index = 0; index < times; index++) {
      console.log('woof!');
    }
  }
}

const kaizer = new Animal('kaizer');
kaizer.move();
console.log(kaizer.greeting());

const chuspi = new Dog('chuspi','Joe');
chuspi.move();
console.log(chuspi.greeting());
chuspi.woof(5);
console.log(chuspi.owner);
