Feature: Login 

  As a user
  I want to login to leovegas website
  So 

Background:
     Given I am on leovegas homepage
     
  @outline
  Scenario: Successful Login with Valid entries
     When I click on login button
     And I attempt to login with valid username as '<username>' and password as '<password>'
     Then I should be logged into client homepage 

     Examples:
     | username               | password   |
     | fabsic.itc@gmail.com   | 210879FA@  |

  @datatable
  Scenario: Unsuccessfully Login with invalid username and password 
     When I click on login button
     And I attempt to login with invalid username and password
     | username           | password   |
     | fabsic.itc@gmail   | 2108       |

     Then I shouldn't logged into client homepage
     And the email warning message "Please enter a valid email address" is shown 

  @smoke
  Scenario: Unsuccessfully Login with invalid username and valid password
     When I click on login button
     And I attempt to login with invalid username as "pippolone@gmail" and valid password as "jerod79FA@"
     Then I shouldn't logged into client homepage
     And the email warning message "Please enter a valid email address" is shown 
 
  @smoke
  Scenario: Unsuccessfully Login with valid username and invalid password
     When I click on login button
     And I attempt to login with valid username as "fabsic.itc@gmail.com" and invalid password as "123@"
     Then I shouldn't logged into client homepage
     And the login warning message "Wrong email or password, please check and try again. If you lost or forgot your password, you can reset it by clicking on the forgot password link." is shown 

  @regression
  Scenario: Unsuccessfully Login with valid username and blank password
     When I click on login button
     And I attempt to login with valid username as "pippolone@gmail.com" and blank password
     Then I shouldn't logged into client homepage
     And the password warning message "Required" is shown

  @regression
  Scenario: Unsuccessfully Login with blank username and valid password
     When I click on login button
     And I attempt to login with blank username and valid password as "123@"
     Then I shouldn't logged into client homepage
     And the email warning message "Please enter an email address" is shown

  @regression
  Scenario: Unsuccessfully Login with blank username and password
     When I click on login button
     And I attempt to login with blank username and password
     Then I shouldn't logged into client homepage
     And the email warning message "Please enter an email address" is shown
     And the password warning message "Required" is shown
