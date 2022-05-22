Feature: API automated testing
# Test5
  Scenario: GET a list and verify it
  When I send a GET request and verify it

# Test6
  Scenario: POST incorrect data and verify that movie is not created
  When I send a POST request with invalid data and verify it

# Test7
  Scenario: POST correct data and verify that movie is created
  When I send a POST request with valid data and verify it

# Test8
  Scenario: DELETE a random movie
  When I delete a random movie and verify success response