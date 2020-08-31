<div align="center">
<img height="200" src="./readme/img_mern.png"/>
&nbsp;&nbsp;&nbsp;&nbsp;
<img height="200" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png"/>
</div>

# :white_check_mark: To-do App

A To-do App with MongoDB, Express, React, Node.js, and TypeScript.

## Source

[How to Build a Todo App with React, TypeScript, NodeJS, and MongoDB](https://www.freecodecamp.org/news/how-to-build-a-todo-app-with-react-typescript-nodejs-and-mongodb/) by [Ibrahima Ndaw](https://github.com/ibrahima92) on [freeCodeCamp.org](https://www.freecodecamp.org/)

### :dvd: Getting started

```
yarn init -y
```

### :heavy_minus_sign: Structure of the project

```
├── dist
├── node_modules
├── src
   ├── app.ts
   ├── controllers
   |  └── todos
   |     └── index.ts
   ├── models
   |  └── todo.ts
   ├── routes
   |  └── index.ts
   └── types
      └── todo.ts
├── nodemon.json
├── package.json
├── tsconfig.json
```

### ⚙ Configuring TypeScript with [tsconfig](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html) using [tsc](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-1-6.html#--init-command-line-option)

```
tsc --init
```

Delete the tsconfig.json's original settings and paste the text below:

```
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "outDir": "dist/js",
    "rootDir": "src",
    "strict": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src/**/*"],
  "exclude": ["src/types/*.ts", "node_modules", ".vscode"]
}
```

:black_small_square: ```\outDir:``` tells the compiler to put the compiled code into the dist/js folder.  
:black_small_square: ```rootDir:``` informs TypeScript to compile every .ts file located in the src folder.  

:black_small_square: ```include:``` tells the compiler to include files that are in the src directory and sub-directory.  
:black_small_square: ```exclude:``` will exclude the files or folders passed in the array during compile-time.  

![tsconfig.json](./readme/screenshot02.png)

