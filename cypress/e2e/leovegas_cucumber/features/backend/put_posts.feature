Feature: Update a post record
  
  Scenario: Update a posts resource successfully
    When I send a HTTP PUT request to API endpoint "https://jsonplaceholder.typicode.com/posts/1"
    Then I get a "200" response codesss
    And I get a success JSON responses 
