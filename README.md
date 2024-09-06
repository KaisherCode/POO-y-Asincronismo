# **Programación Orientada a objetos y Asincronismo**

## **Tabla de Contenido**

- [Introducción](#introducción)
  - [Configuración del proyecto](#configuración-del-proyecto)
- [Fundamentos de POO](#fundamentosPoo)
  - [Class](#class)
  - [Métodos](#metodos)
  - [Acceso público](#accesoPublico)
  - [ Constructor](#constructor)
  - [Getters](#getters)
  - [Setters](#setters)
- [POO Avanzada](#pooAvanzada)
  - [Herencia](#herencia)
  - [Acceso protegido](#accesoProtegido)
  - [Static](#static)
  - [Interfaces](#interfaces)
  - [Clases abstractas](#clasesAbstractas)
  - [Singleton: constructor privado](#singleton)
- [Asincronismo y consumo de APIs](#asincronismoApis)
  - [Promesas](#promesas)
  - [Tipando respuestas HTTP](#tipandoRespuestasHttp)
  - [Proyecto: migración de funciones a clases](#proyectoMigracionFunciones)
  - [Consumiendo ProductMemoryService](#consumiendoProductMemoryService)
  - [ProductHttpService](#productHttpService)
  - [Consumiendo ProductHttpService](#consumiendoProductHttpService)
- [Genéricos](#genericos)
  - [Generics](#generics)
  - [Generics en clases](#genericsClases)
  - [Generics en métodos](#genericsMetodos)
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

_- Para finalizar configuración del proyecto editar el archivo `tsconfig.json` ubicar la línea de código `"outDir": "./"` y modificar a `"outDir": "./dist"`para que todo el transpilado se vaya al directorio `./dist`:
```json
// ...
"outDir": "./dist",
// ...
```
