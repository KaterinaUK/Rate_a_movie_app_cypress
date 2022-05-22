// ********************************************************
// Parameter types are used to define cucumber expressions.
// If these are placed in the common folder they will be
// available to all step definitions.
//
// Example feature file:
//   When I click on the list movies button
//
// Corresponding step definition:
//   When('I click on the {buttonName} button', (buttonName) => {})
// ********************************************************

import { defineParameterType } from '@badeball/cypress-cucumber-preprocessor';

export enum buttonName {
  CREATE_MOVIE = 'CREATEMOVIE',
  LIST_MOVIES = 'LISTMOVIES',
}

defineParameterType({
  name: 'buttonName',
  regexp: /CREATEMOVIE|LISTMOVIES/,
  transformer(buttonName) {
    return buttonName
  },
});

export enum fieldsName {
  Name = 'Name',
  Rating = 'Rating',
  Time = 'Time',
}

defineParameterType({
  name: 'fieldsName',
  regexp: /Name|Rating|Time/,
  transformer(fieldsName) {
    return fieldsName;
  },
});

export enum buttons {
  AddMovie = 'AddMovie',
  Cancel = 'Cancel',
}

defineParameterType({
  name: 'buttons',
  regexp: /AddMovie|Cancel/,
  transformer(buttons) {
    return buttons;
  },
});