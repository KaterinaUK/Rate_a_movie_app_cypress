export class GlobalNavigation {
  static cancelButton: any;
  static ListMoviesButton: any;
  static createMovieButton: any;
  static nameFieldType: any;
  static getUpdateButton: any;

    static getTimeField()
    {
      return cy.get('[value=""]').log("I will leave it empty");
    }

    static searchButton()
    {
      return cy.get(':nth-child(1) > .nav-link').click();
    }

    static clickUpdateButton()
    {
      return cy.get('.sc-fzoyAV')
      .should('have.text', 'Update Movie')
      .click();
    }

    static clickAddButton()
    {
      return cy.get('.sc-fznyAO')
      .should('have.text', 'Add Movie')
      .click();
    }
    cancelButton()
      {
        return cy.get('.sc-fznKkj').should('have.text', 'Cancel')
        .click();
      }

    static newMovieButton()
      {
        return cy.get(':nth-child(2) > .nav-link')
        .click();
      }

    listMoviesButton()
      {
        return cy.get(':nth-child(1) > .nav-link').click();
      }

    static ratingTypeField()
      {
        return cy.get('[type="number"]').clear().type('7');
      }

    static ratingField()
      {
        return cy.get('[type="number"]').type('9');
      }
      
}
export default GlobalNavigation