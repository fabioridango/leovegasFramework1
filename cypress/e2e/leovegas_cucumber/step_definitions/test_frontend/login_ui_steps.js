import {After, Before, Given, Then, When} from '@badeball/cypress-cucumber-preprocessor';
import loginPage from "../../pages/login_page"
import homePage from "../../pages/home_page"  

/*
Before(function() {  //HOOKS -> Before block called before for each scenario
    
  // homePage.visitURL();

  //  cy.reload()
  cy.log("Reload Page")
})

After(function () { //HOOKS -> After block called after for each scenario

   // homePage.visitURL();

   // cy.reload()
   cy.log("Reload Page")
})
*/

/*
Given('I am on leovegas homepage', function ()  {

     homePage.visitURL();
})
*/

When('I click on login button', function()  {

    homePage.clickOnLoginBtn()
})

//Scenario Outline
When('I attempt to login with valid username as {string} and password as {string}', function (username,password) {

    loginPage.clearUsername() 
    loginPage.clearPassword()

    loginPage.typeUsername(username) 
    loginPage.typePassword(password)
    loginPage.submitLogin()
})

Then('I should be logged into client homepage', function ()  {

    loginPage.checksLogged()
})


When("I attempt to login with invalid username and password", function (table)  {

    loginPage.clearUsername() 
    loginPage.clearPassword()

    table.hashes().forEach(row =>{
        loginPage.typeUsername(row.username) 
        loginPage.typePassword(row.password)
    })
    loginPage.submitLogin()
})

Then("I shouldn't logged into client homepage", function ()  {

    cy.url().should('eq','https://www.leovegas.com/en-row/login')
})

When('I attempt to login with invalid username as {string} and valid password as {string}', function (username,password)  {

    loginPage.clearUsername() 
    loginPage.clearPassword()

    loginPage.typeUsername(username) 
    loginPage.typePassword(password)
    loginPage.submitLogin()
})

When('I attempt to login with valid username as {string} and invalid password as {string}',function (username,password) {

    loginPage.clearUsername() 
    loginPage.clearPassword()

    loginPage.typeUsername(username) 
    loginPage.typePassword(password)
    loginPage.submitLogin()
})

Then('the email warning message {string} is shown', function(emailWarningMessage) {

    loginPage.loginWarning(emailWarningMessage)
})

Then('the login warning message {string} is shown', function(loginWarningMessage) {

    loginPage.loginWarning(loginWarningMessage)
})

When('I attempt to login with valid username as {string} and blank password', function(username) {

    loginPage.clearUsername()
    loginPage.clearPassword()

    loginPage.typeUsername(username) 
    loginPage.submitLogin()
})

Then('the password warning message {string} is shown', function(fieldWarningMessage) {

    loginPage.loginWarning(fieldWarningMessage)
})

When('I attempt to login with blank username and valid password as {string}', function(password) {

    loginPage.clearUsername() 
    loginPage.clearPassword()

    loginPage.typePassword(password) 
    loginPage.submitLogin()
})

When('I attempt to login with blank username and password', function() {

    loginPage.clearUsername() 
    loginPage.clearPassword()

    loginPage.submitLogin()
})