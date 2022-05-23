class CreateMovie 

{
  clickCreateMovieButton()
    {
      return   cy.get(':nth-child(2) > .nav-link')
      .should('have.text', 'Create Movie')
      .click();
    }

  getNameField()
    {
      return cy.get('.sc-fzoLsD > :nth-child(3)')
    }
  
  getUpdateNameField()
    {
      return cy.get('[value="Interstellar"]')
    }

  getClearUpdateNameField()
    {
      return cy.get('[value=""]')
    }

  getTimeField()
    {
      return cy.get('.sc-fzoLsD > :nth-child(7)')
    }

  getRatingField()
    {
      return cy.get('[type="number"]')
    }
  
  searchButton()
    {
      return cy.get(':nth-child(1) > .nav-link').click();
    }

  clickUpdateButton()
    {
      return cy.get('.sc-fzoyAV')
      .should('have.text', 'Update Movie')
      .click()
    }

  clickAddButton()
    {
      return cy.findByText(/Add Movie/i)
      .click()
    }

  cancelButton()
      {
        return cy.get('.sc-fznKkj').should('have.text', 'Cancel')
        .click();
      }

  newMovieButton()
      {
        return cy.get(':nth-child(2) > .nav-link')
        .click();
      }

  listMoviesButton()
      {
        return cy.get(':nth-child(1) > .nav-link').click();
      }

  ratingTypeField()
      {
        return cy.get('[type="number"]').clear().type('7');
      }

  ratingField()
      {
        return cy.get('[type="number"]').type('9');
      }

  clickUpadateButton()
      {
        return cy.get(':nth-child(1) > .rt-tr > :nth-child(6) > span > .sc-Axmtr');
      }
}

export default CreateMovie;