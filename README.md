# **Programación Orientada a objetos y Asincronismo**

## **Tabla de Contenido**

- [Introducción](#introducción)
  - [Configuración del proyecto](#configuración-del-proyecto)
- [Fundamentos de POO](#fundamentos-de-poo)
  - [Class](#clases)
  - [Métodos](#methods)
  - [Acceso público](#acceso-publico)
  - [Constructor](#constructor)
  - [Getters](#getters)
  - [Setters](#setters)
- [POO Avanzada](#pooAvanzada)
  - [Herencia](#herencia)
  - [Acceso protegido](#acceso-protegido)
  - [Static](#static)
  - [Interfaces](#interfaces)
  - [Clases abstractas](#clases-abstractas)
  - [Singleton: constructor privado](#singleton)
- [Asincronismo y consumo de APIs](#asincronismoApis)
  - [Promesas](#promesas)
  - [Tipando respuestas HTTP](#tipando-respuestasHttp)
  - [Proyecto: migración de funciones a clases](#proyecto-migracion-funciones)
  - [Consumiendo ProductMemoryService](#consumiendo-product-memory-service)
  - [ProductHttpService](#product-http-service)
  - [Consumiendo ProductHttpService](#consumiendopProduct-http-service)
- [Genéricos](#genericos)
  - [Generics](#generics)
  - [Generics en clases](#generics-clases)
  - [Generics en métodos](#generics-metodos)
  - [Decoradores](#decoradores)


## **[Introducción](#introducción)**

### **[Configuración del proyecto](#configuración-del-proyecto)**

_- Crear el directorio `ts-poo` con el comando `mkdir ts-poo`_

_- Ingresamos al directorio con `cd ts-poo` luego inicializar Git con `git init`_

_- Renombrar nombre de la rama principal `git branch -M main`_

_- Inicializamos nuestro con Node con el comando `npm init -y`_

_- Instalamos la dependencia TypeScrip de forma local `npm i -D typescript`_

_- Verificar versión de TypeScript instalada `npx tsc --version`_

_- Ejecutar `npx tsc --int` para dejar el proyecto preconfigurado_

_- Instalar la librería ts-node como dependencia de desarrollo `npm i ts-node -D` que obvia estar buscando archivos js_

_- Al final abrir el proyecto con VS Code `code .`

_- Recuerda crear el archivo `.gitingore` para ignorar ciertos archivos que no queremos que git realce el traking. Lo puedes crear en [gitignore.io]('https://gitignore.io')_

_- Tambien es recomendable crear el archivo `.editorconfig` para manjear configuraciones globales_

```tsx
<# Editor configuration, see https://editorconfig.org
root = true

[*]
charset = utf-8
indent_style = space
indent_size = 2
insert_final_newline = true
trim_trailing_whitespace = true

[*.ts]
quote_type = single

[*.md]
max_line_length = off
trim_trailing_whitespace = false>
```
_- En la carpeta del proyecto `ts-poo` crear los directorios `src` y `dist`_

_- Para finalizar configuración del proyecto editar el archivo `tsconfig.json` ubicar la línea de código `"outDir": "./"` y modificar a `"outDir": "./dist"`para que todo el transpilado se vaya al directorio `./dist`:_
```json
// ...
"outDir": "./dist",
// ...
```

## **[Fundamentos de POO](#fundamentos-de-poo)**

### [Clases](#clases)

_Una clase en TypeScript es una estructura que permite crear objetos con propiedades y métodos definidos. Es similar a una clase en JavaScript, pero con tipado estático y otras características adicionales._

_Los clases en TS nos sirven para construir instancias de objetos. Es como una plantilla o molde en donde vamos a crear metódos, configuraciones y comportamientos._

La sintaxis básica es:

```ts
class NombreClase {
  // Propiedades
  propiedad: tipo;

  // Constructor
  constructor(parametro: tipo) {
    this.propiedad = parametro;
  }

  // Métodos
  metodo(): tipo {
    // Lógica del método
  }
}

```

_Recuerda reemplazar `NombreClase`, `propiedad`, `tipo`, y `parametro` con nombres y tipos apropiados para tu casao de uso._


### [Métodos](#methods)

_Son funciones definidas dentro de una clase. Se utilizan para realizar operaciones en las instancias de la clase._

La sintaxis básica es:

```ts
class NombreClase {
  // Propiedades y constructor...

  // Método
  metodo(): tipo {
    // Lógica del método
  }
}
```

_Los métodos pueden acceder a las propiedades de la instancia de la clase usando la palabra clave `this`._


### [Acceso público](#acceso-publico)

_Con Private podemos proteger nuestras propiedades y métodos para que no sean accedidos y modificados por fuera de la clase_

__Private__: Con esta palabra reservada `private` estamos restringiendo el acceso de nuestros parámetros y métodos, solo podrán ser accedidos o modificados dentro de la clase._

### [Acceso privado](#acceso-privado)

_En TypeScript, y generakemente en programación, `privado` o `private` se refiere a modificadores de acceso que restringen el uso de un miembro de clase (propiedad método) a dentro de la misma clase. No es una característica directa de TypeScript, sino más bien heredada de la sintaxis de clases de JavaScript._

### [Constructor](#constructor)

_Un constructor es un especial método de una clase que se ejecuta automáticamente al crear una nueva instancia de esa clase. Se utiliza generalmente para inicializar propiedades y realizar otras tareas de configuración. Aquí hay un ejemplo._

```ts
class MiClase {
  private propiedad: string;

  constructor(mensaje: string) {
    this.propiedad = mensaje;
  }

  public mostrarMensaje() {
    console.log(this.propiedad);
  }
}

const obj = new MiClase("Hola, Mundo!");
obj.mostrarMensaje(); // Imprime "Hola, Mundo!"
```
_En este ejemplo, el constructor de la clase `MiClase` toma un parámetro `mensaje` y lo asigna a la propiedad `propiedad`. Luego, se puede usar el método ``mostrarMensaje` para imprimir el mensaje._

### [Getters](#getters) _Una forma de acceder a los atributos_

_Los getters y setters en TS son métodos especiales utilizados para acceder y modificar las propiedades de una clase. Los getters se utilizan para obtener el valor de una propiedad, mientras que los setters se utilizan para establecer un nuevo valor para una propiedad. Ayudan a controlar y validar los valores asigandos a las propiedades de una clase._

_Los getters en TypeScript son métodos especiales que se utilizan para obtener el valor de una propiedad. A diferencia de los métodos regulares, no tienen paréntesis después de su nombre cuando se invocan. Sirven para acceder a los valores de las propiedades de una clase de manera controlada y segura._

```ts
function isLeapYear(year: number): boolean {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
```

### [Setters](#setters)

_Los setters en TypeScript son métodos especiales que se utilizan para establecer un nuevo valor para una propiedad. A diferncia de los métodos regulares, se invocan sin paréntesis después de su nombre y reciben el nuevo valor como parámetro. Los stters permiten controlar y validar los valores asignados a las propiedades de una clase antes de que sean guardadas en la memoria._

## **[POO Avanzada](#poo-avanzada)**

### [Herencia](#herencia)

_La herencia en typescript es una característica que permite a una clase adquirir las propiedades y métodos de otra clase. La clase que hereda se denomina clase derivada o subclase, y la clase de la que hereda se denomina clase base o superclase. La herencia ayuda a promover el principio de DRY (Don't Repeat YourSelf) al evitar la repetición de código y facilitar la reutilización de código._

_En TypeScript, utilizas la palabra clave `extends` para lograr la herencia. Aquí hay un ejemplo básico:_

```ts
class Vehicle {
  protected honk(): void {
    console.log('Beep beep!');
  }
}

class Car extends Vehicle {
  startEngine(): void {
    this.honk();
  }
}
```
_En este ejemlpo, la clase `Car` hereda de la clase `Vehicle` y por lo tanto, tiene acceso al método protegido `honk()`._

### [Acceso protegido](#acceso-protegido)

### [Static](#static)

### [Interfaces](#interfaces)

### [Clases abstractas](#clases-abstractas)

### [Singleton: constructor privado](#singleton-constructor-privado)

## **[Asincronismo y consumo de APIs](#asincronismo-y-consumo-de-apis)**

### [Promesas](#promesas)

### [Tipado respuestas HTTP](#tipado-respuestas-http)

### [Proyecto: migración de funciones a clases](#proyecto-migración-de-funciones-a-clases)

### [Consumiendo product memory service](#consumiendo-product-memory-service)

## **[Genéricos](#genericos)**

### [Generics](#generics)

### [Generics en clases](#generics-en-clases)

### [Genrics en métodos](#genrics-en-métodos)

### [Decoradores](#decoradores)


