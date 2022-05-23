class ListMovies 

{
  clickListMoviesButton()
    {
      return cy.findByText(/List Movies/i)
      .click()
    }

  clickRatingField()
    {
      return cy.get(':nth-child(3) > input')
      .click()
    }
  
  clickNameField()
    {
      return cy.get(':nth-child(2) > input')
      .click()
    }
  
  clickIDField()
    {
      return cy.get('.rt-tr > :nth-child(1) > input')
      .click()
    }

  nameFieldResult()
    {
      return cy.get('.rt-tbody > :nth-child(1) > .rt-tr > :nth-child(2)')
    }

  ratingFieldResult()
    {
      return cy.get('.rt-tbody > :nth-child(1) > .rt-tr > :nth-child(3)')
    }
  
  clickUpadateButton()
    {
      return cy.get(':nth-child(1) > .rt-tr > :nth-child(6) > span > .sc-Axmtr')
      .click()
    }
}
      
export default ListMovies;
