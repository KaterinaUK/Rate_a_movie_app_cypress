import { Before, Given, And, When, Then, DataTable} from '@badeball/cypress-cucumber-preprocessor';
import GlobalNavigation from '../../support/POM/Front_End_app_page';
var _ = require('lodash');
const url = 'http://localhost:3000'

Before(() => {
 cy.visit(url)
 cy.log('this is start')
 });

Given('I open the application', () => {
  cy.contains('Simple Application');
  cy.log.name
},
);
And('I find a specific movie', () =>{
  GlobalNavigation.nameFieldType;
  GlobalNavigation.getUpdateButton;
});
Then('I will update the name', () => {
  GlobalNavigation.ratingTypeField;
  GlobalNavigation.clickUpdateButton;
});

And('I click on Create Movie button', () => {
  return cy.get(':nth-child(2) > .nav-link')
        .click();
},
);
When('I add a movie to the database', () => {
  cy.get('.sc-fzoLsD > :nth-child(3)').type('test1');
  cy.get('[type="number"]').clear().type('7');
  GlobalNavigation.getTimeField;
  cy.get('.sc-fznyAO')
  .should('have.text', 'Add Movie')
  .click();
  cy.on('window:alert', (txt) => {
    expect(txt).to.contains('Movie inserted successfully');
  });
},
);
Then('this movie is saved to the database', () => {
  cy.request('http://localhost:3000/movies/list').as('c')
  cy.get('@c').should((response) => {
   expect(response).to.have.property('headers')
  },
  );
  })

Then('I cancel submission', () => {
  GlobalNavigation.cancelButton;
},
);

When('I click on list movies button to perform a search', () =>{
  cy.get(':nth-child(1) > .nav-link').click();
  cy.wait(1);
})

When(/^I use data-driven approach$/, (table: DataTable) => {
    console.log("I provide below information - display it all");
    var rows = table.hashes();
    _.each(rows, function(row){
     console.log(row.ID[1] + " " + row.Name + " " + row.Rating);
    cy.get('.rt-tr > :nth-child(1) > input').type(row.ID);
    cy.get(':nth-child(2) > input').click().type(row.Name);
    cy.get(':nth-child(3) > input').click().type('9');
    })
})

