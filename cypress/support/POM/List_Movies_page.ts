export class Navigation {
    static cancelButton: any;
    static ListMoviesButton: any;
    static createMovieButton: any;
      
      static getUpdateButton() {
        throw new Error('Method not implemented.');
      }
  
      static getUpadateButton()
      {
          return cy.get(':nth-child(1) > .rt-tr > :nth-child(6) > span > .sc-Axmtr').click();
      }

      static nameFieldType()
      {
        return cy.get('.sc-fzoLsD > :nth-child(3)')
        .type('test1');
      }
  }
  export default Navigation