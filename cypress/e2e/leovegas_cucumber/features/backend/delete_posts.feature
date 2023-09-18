Feature: Deleate a post record
  
  Scenario: Delete a posts resource successfully
    When I send a HTTP DELETE request to API endpoint "https://jsonplaceholder.typicode.com/posts/1"
    Then I get a "200" response code

    