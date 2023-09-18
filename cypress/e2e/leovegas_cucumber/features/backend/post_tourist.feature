Feature: Add a post record
  
  Scenario: Add a posts resource successfully
    When I send a HTTP POST request to API endpoint "http://restapi.adequateshop.com/api/Tourist"
    Then I get a "201" response codess
    And I get a success JSON response 
