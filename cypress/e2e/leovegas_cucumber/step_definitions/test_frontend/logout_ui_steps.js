import {After, Before, Given, Then, When} from '@badeball/cypress-cucumber-preprocessor';
import loginPage from "../../pages/login_page"
import homePage from "../../pages/home_page"  
import clientHomePage from "../../pages/cient_home_page" 

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

Given('I am logged into client portal', function ()  {

    homePage.visitURL();

    homePage.clickOnLoginBtn();

    loginPage.clearUsername() 
    loginPage.clearPassword()

    loginPage.typeUsername("fabsic.itc@gmail.com") 
    loginPage.typePassword("210879FA@")
    loginPage.submitLogin()

    loginPage.checksLogged()


})


When('I click on log out link in the navigation bar', () => {

    clientHomePage.clickOnNavbarBtn();

    clientHomePage.clickOnLogoutBtn();
})


Then("I should be logged out from client portal", function ()  {

    cy.url().should('eq','https://www.leovegas.com/en-row/')
})

