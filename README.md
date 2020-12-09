# VueJS STARTER KIT

A pre configured package to start a VueJS 2.6 project in the right way.

## Requirements

Use visual studio code as IDE with the following extensions.

-   Vetur
-   Prettier - Code formatter
-   ESLint

NPM is already installed on the computer.

## Install

Clone the repository on your computer and run the install command.

`npm install`

The installation will be done based on the package.json file.

## Run the application

Once the installation is done, fire the running command.

`npm run serve`

Launch your favorite browser and go to this [webpage](http://localhost:8080/)

## What is included in this stater kit ?

A ready to use VueJS 2.6 configured with Vuex, vue-router and Vue-axios.

All the code lives in _src_ folder.

```
src
|_assets
|_components
|_mixins
|_router
|_services
|_store
|_views
.App.vue
.main.js
```

**App.vue**: The global component where views will be called thanks to vue-router

**views**: This repository will contained all templates build with components.

**components**: This repository will contained all custom components.

**mixins**: A repository to store all repetitive task as field validation.

**router**: Define the route of your entire application

**services**: Preconfigured API fetcher with GET, POST and DELETE operation already implemented

**store**: Where live the states, getters, actions and mutations of the application, based on Vuex.
