// Uso habitual de la librería Math - Common use of Math library
console.log('Math.PI:',Math.PI); // 3.141592653589793
console.log('Math.max:',Math.max(1,2,2,8,1,0)); // 8
// create our own Math library
class MyMath {
  static readonly PI = 3.1415;

  static max(...numbers: number[]){
    return numbers.reduce((max,item)=>max >=item? max:item);
  }
}

console.log('MyMath.PI', MyMath.PI); // 3.1415
console.log('MyMsth.max', MyMath.max(122,2,1,1112,9));
const numbers = [12,2,1,1112,9,3000];
console.log('MyMath.max', MyMath.max(...numbers));
console.log('MyMath.max', MyMath.max(-1,-9,-8));
