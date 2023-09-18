Feature: Logout 

  As a user
  I want to logout to leovegas website
  So 
     
  @regression
  Scenario: Successful logged out from client portal
     Given I am logged into client portal
     When I click on log out link in the navigation bar
     Then I should be logged out from client portal 


