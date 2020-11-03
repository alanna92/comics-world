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

## Code structure



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
