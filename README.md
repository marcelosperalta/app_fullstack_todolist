<div align="center">
<img height="200" src="./client/public/images/img_mern.png"/>
&nbsp;&nbsp;&nbsp;&nbsp;
<img height="200" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png"/>
</div>

# :white_check_mark: To-do App

A To-do App with [MongoDB](https://www.mongodb.com/), [Express](https://expressjs.com/), [React](https://reactjs.org/), [Node.js](https://nodejs.org/en/), and [TypeScript](https://www.typescriptlang.org/).
<br>
<br>

[![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/marcelosperalta/todoApp_react)

**_App_**

![to-do list](./client/public/images/img_screenshot01a.png)

**_MongoDB Compass Community_**

![to-do app db](./client/public/images/img_screenshot01b.png)

**_MongoDB Atlas_**

![to-do app db](./client/public/images/img_screenshot01c.png)

## :star: Source

[How to Build a Todo App with React, TypeScript, NodeJS, and MongoDB](https://www.freecodecamp.org/news/how-to-build-a-todo-app-with-react-typescript-nodejs-and-mongodb/) by [Ibrahima Ndaw](https://github.com/ibrahima92) on [freeCodeCamp.org](https://www.freecodecamp.org/)
<br>
<br>

## :cloud: Getting Started **Server-side**

#### [:open_file_folder:server](https://github.com/marcelosperalta/todoApp_react/blob/master/server/)

### :dvd: Generate the ```tsconfig.json```

```
yarn init -y
```

### :heavy_minus_sign: Structure of the project

```
├── server
    ├── dist
    ├── node_modules
    ├── src
        ├── controllers
        |  └── todos
        |     └── index.ts
        ├── models
        |  └── todo.ts
        ├── routes
        |  └── index.ts
        └── types
           └── todo.ts
        ├── app.ts
    ├── nodemon.json
    ├── package.json
    ├── tsconfig.json
```

![server structure](./client/public/images/img_screenshot02.png)

### ⚙ Configuring TypeScript with [tsconfig](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html) using [tsc](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-1-6.html#--init-command-line-option)

```
tsc --init
```

Delete the ```tsconfig.json``` original settings and paste the text below:

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

:black_small_square: ```outDir:``` tells the compiler to put the compiled code into the dist/js folder.  
:black_small_square: ```rootDir:``` informs TypeScript to compile every .ts file located in the src folder.  

:black_small_square: ```include:``` tells the compiler to include files that are in the src directory and sub-directory.  
:black_small_square: ```exclude:``` will exclude the files or folders passed in the array during compile-time.  

![tsconfig.json](./client/public/images/img_screenshot03.png)

### :dvd: Install the dependencies to enable [TypeScript](https://www.typescriptlang.org/)  

```
yarn add typescript -g
```

### :dvd: Install the dependencies [Express](https://expressjs.com/), [CORS](https://github.com/expressjs/cors), and [Mongoose](https://mongoosejs.com/) to use [Express](https://expressjs.com/) and [MongoDB](https://www.mongodb.com/)  

```
yarn add express cors mongoose
```

:heavy_exclamation_mark: install their types as development dependencies to help the TypeScript compiler understand the packages.

:loudspeaker: see _[type declarations](https://www.typescriptlang.org/docs/handbook/declaration-files/consumption.html)_

```
yarn add -D @types/node @types/express @types/mongoose @types/cors
```

![package.json](./client/public/images/img_screenshot04.png)

### :dvd: Install the dependencies [Concurrently](https://github.com/kimmobrunfeldt/concurrently#readme), and [nodemon](https://nodemon.io/)  


[Concurrently](https://github.com/kimmobrunfeldt/concurrently#readme) will help compile the TypeScript code, keep watching for changes, and also start the server simultaneously.

```
yarn add -D concurrently nodemon
```

:heavy_exclamation_mark: update the ```package.json```

```
"scripts": {
  "build": "tsc",
  "start": "concurrently \"tsc -w\" \"nodemon dist/js/app.js\""
}
```

![package.json](./client/public/images/img_screenshot05.png)

### :hash::zero::one: Create a Todo Type

:open_file_folder: [server/src/types/todo.ts](https://github.com/marcelosperalta/todoApp_react/blob/master/server/src/types/todo.ts)


### :hash::zero::two: Create a Todo Model

:open_file_folder: [server/src/models/todo.ts](https://github.com/marcelosperalta/todoApp_react/blob/master/server/src/models/todo.ts)

### :hash::zero::three: Create API controllers
**Get, Add, Update and Delete Todos**

:open_file_folder: [server/src/controllers/todos/index.ts](https://github.com/marcelosperalta/todoApp_react/blob/master/server/src/controllers/todos/index.ts)

### :hash::zero::four: Create API routes

:open_file_folder: [server/src/routes/index.ts](https://github.com/marcelosperalta/todoApp_react/blob/master/server/src/routes/index.ts)

### :hash::zero::five: Create a Server

:page_with_curl: Create a ```nodemon.json``` file to hold the MongoDB credentials.

```
{
    "env": {
        "MONGO_USER": "your-username",
        "MONGO_PASSWORD": "your-password",
        "MONGO_DB": "your-db-name"
    }
}
```

:rotating_light: add the ```nodemon.json``` to your [.gitignore](https://git-scm.com/docs/gitignore) file to protect your DB access data.

![nodemon.json](./client/public/images/img_screenshot06.png)

:loudspeaker: you can get the credentials by [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

### :hash::zero::six: Create a ```app.ts``` file.

:open_file_folder: [server/src/app.ts](https://github.com/marcelosperalta/todoApp_react/blob/master/server/src/app.ts)

```
import express, { Express } from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import todoRoutes from './routes'
import bodyParser from 'body-parser'

const app: Express = express()

const PORT: string | number = process.env.PORT || 4000

app.use(bodyParser())
app.use(cors())
app.use(todoRoutes)

// replace the host "cluster0.xo006.mongodb.net" with the address of your host generated in MongoDB Atlas.
// https://docs.mongodb.com/manual/reference/connection-string/
const uri: string = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.xo006.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`

const options = { useNewUrlParser: true, useUnifiedTopology: true }
mongoose.set('useFindAndModify', false)

mongoose
.connect(uri, options)
.then(() =>
    app.listen(PORT, () =>
        console.log(`Server running on http://localhost:${PORT}`)
    )
)
.catch((error) => {
    throw error
})
```

:rotating_light: about the ```const uri``` above, you need to change the cluster url ```cluster0-shard-00-01.xo006.mongodb.net``` using your own cluster url generated by [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
<br>
<br>

## :computer: **Client-side** with React and TypeScript

#### [:open_file_folder:client](https://github.com/marcelosperalta/todoApp_react/blob/master/client/)

### ⚙ Setting up

:black_small_square: Create a new [React App](https://reactjs.org/docs/create-a-new-react-app.html) adding [TypeScript](https://create-react-app.dev/docs/adding-typescript/)

:rotating_light: the ```client``` folder needs to be at the same level of the ```server``` folder.

![client folder](./client/public/images/img_screenshot07.png)

```
npx create-react-app client --template typescript
```

:black_small_square: open the ```client``` folder.

```
cd client
```

:black_small_square: Install the [Axios](https://github.com/axios/axios#axios) library to be able to fetch remote data.

```
yarn add axios
```

### :heavy_minus_sign: Structure of the project

```
├── client
    ├── node_modules
    ├── public
    ├── src
    |   ├── components
    |   |  ├── AddTodo.tsx
    |   |  └── TodoItem.tsx
    |   ├── API.ts
    |   ├── App.tsx
    |   ├── App.test.tsx
    |   ├── index.css
    |   ├── index.tsx
    |   ├── react-app-env.d.ts
    |   ├── setupTests.ts
    |   └── type.d.ts
    ├── tsconfig.json
    ├── package.json
    └── yarn.lock
├── server
```

![client structure](./client/public/images/img_screenshot08.png)

### :hash::zero::one: Create a Todo Type

:open_file_folder: [client/src/type.d.ts](https://github.com/marcelosperalta/todoApp_react/blob/master/client/src/type.d.ts)

### :hash::zero::two: Fetch data from the API

:open_file_folder: [client/src/API.ts](https://github.com/marcelosperalta/todoApp_react/blob/master/client/src/API.ts)

### :hash::zero::three: Add Todo Form

:open_file_folder: [client/src/components/AddTodo.tsx](https://github.com/marcelosperalta/todoApp_react/blob/master/client/src/components/AddTodo.tsx)

### :hash::zero::four: Display a Todo

:open_file_folder: [client/src/components/TodoItem.tsx](https://github.com/marcelosperalta/todoApp_react/blob/master/client/src/components/TodoItem.tsx)

### :hash::zero::five: Fetch and Display data

:open_file_folder: [client/src/App.tsx](https://github.com/marcelosperalta/todoApp_react/blob/master/client/src/components/TodoItem.tsx)

## :rocket: Run the Project

### :octocat: Git clone

```
git clone https://github.com/marcelosperalta/todoApp_react
```

![client](./client/public/images/img_screenshot09.png)

### :cloud: Server-side

:black_small_square: **_Open ```server``` folder_**

```
cd server
```

:black_small_square: **_Create ```nodemon.json``` file_** _(e.g. using PowerShell)_

```
New-Item nodemon.json
```

:black_small_square: **_Fill the ```nodemon.json``` file with MongoDB credentials_**

```
{
    "env": {
        "MONGO_USER": "your-username",
        "MONGO_PASSWORD": "your-password",
        "MONGO_DB": "your-db-name"
    }
}
```

![client](./client/public/images/img_screenshot10.png)

:black_small_square: **_Install the project dependencies based on the ```package.json```_**

```
yarn install
```

![client](./client/public/images/img_screenshot11.png)

:black_small_square: **_Run the project based on the ```package.json``` start script_**

```
yarn start
```

:rotating_light: If you found some error during the first start, stop the app (ctrl + c) and try to run again.

![client](./client/public/images/img_screenshot12.png)

### :computer: Client-side

:black_small_square: **_Open ```client``` folder_**

```
cd client
```

:black_small_square: **_Install the project dependencies based on the ```package.json```_**

```
yarn install
```

![client](./client/public/images/img_screenshot13.png)

:black_small_square: **_Run the project based on the ```package.json``` start script_**

```
yarn start
```

![client](./client/public/images/project_start.gif)

### :runner: Run :cloud: Server-side and :computer: Client-side simultaneously  

:black_small_square: **_Open ```server``` folder_**

```
cd server
```

:black_small_square: **_Create ```nodemon.json``` file_** _(e.g. using PowerShell)_

```
New-Item nodemon.json
```

:black_small_square: **_Fill the ```nodemon.json``` file with MongoDB credentials_**

```
{
    "env": {
        "MONGO_USER": "your-username",
        "MONGO_PASSWORD": "your-password",
        "MONGO_DB": "your-db-name"
    }
}
```

![client](./client/public/images/img_screenshot10.png)

:black_small_square: **_Install the project dependencies based on the ```package.json```_**

```
yarn install
```

:black_small_square: **_Open ```client``` folder_**

```
cd client
```

:black_small_square: **_Install the project dependencies based on the ```package.json```_**

```
yarn install
```

![client](./client/public/images/img_screenshot13.png)

:black_small_square: **_Return to the root folder of the project and install the dependencies based on the ```package.json```_**

```
yarn install
```

:black_small_square: **_Run the project based on the ```package.json``` start script_**

```
yarn start
```