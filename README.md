# Comics World

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.2.0.

Comics World is a use case to study Angular. It was used the [Marvel Comics API](https://developer.marvel.com/), for this reason to run up this application read carefully the section [Running locally](#running-locally).

For now, this app has the following features:

- List comics
- Filter comics by title
- See comics details
- List characters
- Filter characters by name
- See characters details
- Save/Unsave a character as favorite (it will be stored in localStorage)
- See characters saved as favorite

Click [here to see the demo app](https://nervous-elion-362ba8.netlify.app).

## Folder structure

The folder structure used was:

```bash
├── src
│   ├── app
│   │   ├── core
│   │   |   ├── components
│   │   |   ├── interceptors
│   │   |   ├── core.module.ts
│   │   ├── features
│   │   |   ├── characters
│   │   |   |   ├── components
│   │   |   |   ├── containers
│   │   |   |   ├── models
│   │   |   |   ├── services
│   │   |   |   ├── characters.routing.module.ts
│   │   |   |   ├── characters.module.ts
│   │   |   ├── comics
│   │   |   |   ├── ...
│   │   ├── shared
│   │   |   ├── components
│   │   |   ├── models
│   │   |   ├── shared.module.ts
│   ├── assets
│   ├── environments
│   ├── styles
│   ├── ...
├── ...
```

Inside `core` module we have everything that is imported only one time inside `AppModule`.

In `features` folder, we divide our structure in main features. As we can see in this example, we have `characters` and `comics` features. Everything related to this features can be find in the respective folder.

Inside `shared` folder, we have every shared components, models, service, etc.

`assets` and `environments` are well known folders in Angular apps. We didn't change anything about it.

We use `styles` folder to put every shared styles, as variables, for example.

## Running Locally

First of all, you need to create an accont on [Marvel Comics API](https://developer.marvel.com/) and fallow their steps to generate a PUBLIC API.
After clonning the project and running `npm install`, it is necessary to create this file `./src/environments/marvel-api.envionment.ts` with the content:

```typescript
export const environment = {
    apiUrl: 'PUBLIC API HERE',
};
```

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
