export class Animal {
  constructor(protected name: string) { } // acceso protected

  move() {
    console.log('Moving along!');
  }

  greeting() {
    return `Hello, I'm ${this.name}`;
  }

  protected doSomething(){
    console.log('dooo');
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
      console.log(`woof! ${this.name}`);
    }
    this.doSomething();
  }
  move(){
    console.log('moving as a dog');
    super.move();
  }
}

const chuspi = new Dog('chuspi','Joe');
// <!--con acceso protected evitamos modificaciones por fuera.-->//
// chuspi.name = 'other name';
chuspi.woof(2);
// chuspi.doSomething();
chuspi.move();
