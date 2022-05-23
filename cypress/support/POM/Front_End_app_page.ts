export class GlobalNavigation {
    static cancelButton: any;
  static ListMoviesButton: any;
  static RatingTypeField: any;
  static clickUpdateButton: any;
  static ratingTypeField: any;
  static createMovieButton: any;
  static newMovieButton: any;
  static ratingField: any;
  static searchButton: any;
  static getTimeField: any;
    static getUpdateButton() {
      throw new Error('Method not implemented.');
    }
    static nameFieldType() {
      throw new Error('Method not implemented.');
    }
    static getHeader() {
      throw new Error('Method not implemented.');
    }

    getUpadateButton()
    {
        return cy.get(':nth-child(1) > .rt-tr > :nth-child(6) > span > .sc-Axmtr').click();
    }
    getTimeField()
    {
      return cy.get('[value=""]').log("I will leave it empty");
    }
    searchButton()
    {
      return cy.get(':nth-child(1) > .nav-link').click();
    }
    clickUpdateButton()
    {
      return cy.get('.sc-fzoyAV')
      .should('have.text', 'Update Movie')
      .click();
    }
    nameFieldType()
    {
      return cy.get('.sc-fzoLsD > :nth-child(3)')
      .type('test1');
    }
    cancelButton()
      {
        return cy.get('.sc-fznKkj').should('have.text', 'Cancel')
        .click();
      }
    newMovieButton()
      {
        return cy.get(':nth-child(2) > .nav-link').click();
      }

    listMoviesButton()
    {
      return cy.get(':nth-child(1) > .nav-link').click();
    }

    ratingTypeField()
    {
      return cy.get('[type="number"]')
    }
    ratingField()
    {
      return cy.get('[type="number"]').type('9');
    }
}
export default GlobalNavigation