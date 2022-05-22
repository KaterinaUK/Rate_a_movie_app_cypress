import { And, Given, Then, When } from '@badeball/cypress-cucumber-preprocessor/lib/methods';

Given('I open the application', () => {
    cy.contains('Simple Application');
    cy.log.name
  },
  );
  And('I find a specific movie', () =>{
    cy.get(':nth-child(1) > .rt-resizable-header-content').screenshot();
    cy.get(':nth-child(2) > input').type('test1');
    cy.get(':nth-child(1) > .rt-tr > :nth-child(6) > span > .sc-Axmtr').click();
});
  Then('I will update the name', () => {
    cy.get('[type="number"]').clear().type('7')
    cy.get('.sc-fzoyAV')
    .should('have.text', 'Update Movie')
    .click();
  });