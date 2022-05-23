
Feature: Create Movie
  # This Feature will create a Movie
  # Background used when we have the same step repeted in the Given statement
     Background: I open the application

# Test1 
  Scenario: Create a new movie
      And  I click on Create Movie button
      When I add a movie to the database
          | Name  | Rating | Time |
          | Moonlight | 8  | 17:00  |
          | The Dark Knight | 9  | 18:00  |
          | Interstellar | 10  | 19:00  |
      Then this movie is saved to the database

# Test2
  Scenario: Cancel creation of the movie
      When  I click on Create Movie button
      Then  I cancel submission

# Test3
  Scenario: Perform a search in the movie list using DataTable
      When I click on list movies button to perform a search
      And I use data-driven approach to search movie list
          | ID | Name  | Rating |
          | 62 | Moonlight | 8       |
          | 63 | The Dark Knight | 9       |
          | 64 | Interstellar | 10       |

# Test4
  Scenario: Update the movie
      When I click on list movies button to perform a search
      And I find a specific movie
      Then I will update the name