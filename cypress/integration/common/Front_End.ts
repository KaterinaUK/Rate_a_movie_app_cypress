/// <reference types="Cypress" />

import { Before, Given, And, When, Then, DataTable} from '@badeball/cypress-cucumber-preprocessor';
import { create } from 'cypress/types/lodash';
import CreateMovie from '../../support/POM/Create_Movie_page';
import ListMovies from '../../support/POM/List_Movies_page';
var _ = require('lodash');
const url = 'http://localhost:3000';

const createMovie = new CreateMovie();
const listMovies = new ListMovies();

Before(() => {
 cy.visit(url)
 cy.log('this is start')
});

Given('I open the application', () => {
  cy.contains('Simple Application');
  cy.log.name
});

And('I find a specific movie', () =>{
  listMovies.clickNameField()
    .type('Interstellar')
  listMovies.clickUpadateButton();
});

Then('I will update the name', () => {
  createMovie.getUpdateNameField()
    .focus()
    .clear();
  createMovie.getClearUpdateNameField()  
    .type('Casablanca');
  createMovie.clickUpdateButton();
  cy.on('window:alert', (txt) => {
    expect(txt).to.contains('Movie updated successfully');   // verification step for checking that succcess message is displayed to user
  })
});

And('I click on Create Movie button', () => {
  createMovie.clickCreateMovieButton();
});

When(/^I add a movie to the database$/, (table: DataTable) => {
    console.log("Start of data table test entering new movies to database");
    var rows = table.hashes();
    _.each(rows, function(row){
    console.log(row.Time[1] + " " + row.Name + " " + row.Rating);
    createMovie.getNameField()
      .type(row.Name);
    createMovie.getRatingField()
      .type(row.Rating);
    createMovie.getTimeField()  
      .type(row.Time);
    createMovie.clickAddButton();
    cy.on('window:alert', (txt) => {
      expect(txt).to.contains('Movie inserted successfully');   // verification step for checking that succcess message is displayed to user
    })
  })
});

Then('this movie is saved to the database', () => {
  cy.log('end of test')
  });

Then('I cancel submission', () => {
  createMovie.cancelButton();
});

When('I click on list movies button to perform a search', () =>{
  listMovies.clickListMoviesButton();
});

When(/^I use data-driven approach to search movie list$/, (table: DataTable) => {
    console.log("I provide below information - display it all");
    var rows = table.hashes();
    _.each(rows, function(row){
     console.log(row.ID[1] + " " + row.Name + " " + row.Rating);

    listMovies.clickIDField()
      .type(row.ID)
      .clear();

    listMovies.clickNameField()
      .type(row.Name);
    listMovies.nameFieldResult()
      .should('contain', row.Name);  // verification step for checking search result appears as expected
    listMovies.clickNameField()
      .clear();

    listMovies.clickRatingField()
      .type(row.Rating);
    listMovies.ratingFieldResult()
      .should('contain', row.Rating);  // verification step for checking search result appears as expected
    listMovies.clickRatingField()
      .clear();
  })
});