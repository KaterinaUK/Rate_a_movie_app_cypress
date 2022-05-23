export class Navigation {
    static cancelButton: any;
    static ListMoviesButton: any;
    static RatingTypeField: any;
    static createMovieButton: any;
      
      static getUpdateButton() {
        throw new Error('Method not implemented.');
      }

      static clickUpdateButton()
      {
        return cy.get('.sc-fzoyAV')
        .should('have.text', 'Update Movie')
        .click();
      }
  
      static getUpadateButton()
      {
          return cy.get(':nth-child(1) > .rt-tr > :nth-child(6) > span > .sc-Axmtr').click();
      }
  
      static ratingTypeField()
      {
        return cy.get('[type="number"]').clear().type('7');
      }
      
      static getTimeField()
      {
        return cy.get('[value=""]').log("I will leave it empty");
      }
  
      
  
      static nameFieldType()
      {
        return cy.get('.sc-fzoLsD > :nth-child(3)')
        .type('test1');
      }
  
      cancelButton()
        {
          return cy.get('.sc-fznKkj').should('have.text', 'Cancel')
          .click();
        }
  
      static newMovieButton()
        {
          return cy.get(':nth-child(2) > .nav-link').click();
        }
        
  }
  export default Navigation